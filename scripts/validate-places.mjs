import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve(process.cwd(), 'data/places.json');
const raw = fs.readFileSync(filePath, 'utf8');
const data = JSON.parse(raw);

const errors = [];

function checkPlace(place, scope) {
  const required = ['id', 'name', 'kind', 'address', 'mapQuery', 'lat', 'lng', 'image'];
  for (const key of required) {
    if (!(key in place)) errors.push(`${scope}: missing ${key}`);
  }
  if (typeof place.id !== 'string') errors.push(`${scope}: id must be string`);
  if (typeof place.lat !== 'number' || typeof place.lng !== 'number') errors.push(`${scope}: lat/lng must be number`);
  if (!place.image || typeof place.image.url !== 'string') errors.push(`${scope}: image.url missing`);
}

if (!data.meta?.canonicalSource) errors.push('meta.canonicalSource missing');
if (!data.days || typeof data.days !== 'object') errors.push('days missing');
if (!Array.isArray(data.food)) errors.push('food array missing');

for (const [dayKey, places] of Object.entries(data.days || {})) {
  if (!Array.isArray(places)) {
    errors.push(`${dayKey}: must be array`);
    continue;
  }
  for (const place of places) checkPlace(place, `days.${dayKey}.${place.id || 'unknown'}`);
}

for (const place of data.food || []) checkPlace(place, `food.${place.id || 'unknown'}`);

if (errors.length) {
  console.error('places.json validation failed');
  for (const error of errors) console.error('-', error);
  process.exit(1);
}

console.log('places.json validation OK');
