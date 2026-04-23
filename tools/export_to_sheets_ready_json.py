#!/usr/bin/env python3
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data'
OUT = ROOT / 'data' / 'sheets-seed.json'

places = json.loads((DATA / 'places.json').read_text())
itinerary = json.loads((DATA / 'itinerary.json').read_text())
food = json.loads((DATA / 'food.json').read_text())

payload = {
    'places': places,
    'itinerary': itinerary,
    'food': food,
}

OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2))
print(f'wrote {OUT}')
