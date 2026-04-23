function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const placesSheet = ss.getSheetByName('places');
  const itinerarySheet = ss.getSheetByName('itinerary');
  const foodSheet = ss.getSheetByName('food');

  const places = sheetToObjects_(placesSheet);
  const itinerary = sheetToObjects_(itinerarySheet);
  const food = sheetToObjects_(foodSheet);

  const payload = {
    updatedAt: new Date().toISOString(),
    places,
    itinerary,
    food,
  };

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function sheetToObjects_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (!values.length) return [];
  const headers = values[0];
  return values.slice(1).filter(row => row.some(Boolean)).map(row => {
    const obj = {};
    headers.forEach((header, i) => obj[header] = row[i]);
    return obj;
  });
}
