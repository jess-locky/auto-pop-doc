// This function runs when "AutoFill Docs" is actioned.
// This a custom menu item called "AutoFill Docs" to the Google Sheets UI.
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('AutoFill Docs');
  menu.addItem('Create New Docs', 'createNewGoogleDocs');  // Adds a clickable menu item that triggers createNewGoogleDocs
  menu.addToUi();
}

// This function creates new Google Docs based on a template and fills them with data from the sheet.
function createNewGoogleDocs() {

  // Get the Google Doc template by its file ID (replace with your actual template ID)
  const googleDocTemplate = DriveApp.getFileById('Enter template ID');

  // Get the destination folder by its ID where the new docs will be saved (replace with your folder ID)
  const destinationFolder = DriveApp.getFolderById('Enter folder ID');

  // Get the active spreadsheet and the specific sheet tab by its name (replace with your sheet's name)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Name of your sheet');

  // Get all the data in the sheet as a 2D array (rows and columns)
  const rows = sheet.getDataRange().getValues();

  // Loop over each row of data
  rows.forEach(function(row, index) {
    if (index === 0) return; // Skip the header row (usually the first row)
    if (row[12]) return;     // Skip rows that already have a URL in the last column, in this example 11 (index 10)

    // Make a copy of the template, name it dynamically based on row data, and save it in the destination folder
    const copy = googleDocTemplate.makeCopy(`${row[1]}, ${row[0]} To Name`, destinationFolder);

    // Open the copied document by its ID so we can edit it
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();

    // Replace placeholders in the template with actual values from the sheet columns 
    // See read me file for step by step
    body.replaceText("{{To Name}}", row[0]);
    body.replaceText("{{Company Name}}", row[1]);
    body.replaceText("{{Company Address}}", row[2]);
    body.replaceText("{{Service Name}}", row[3]);
    body.replaceText("{{Date}}", row[4]);
    body.replaceText("{{Service Date}}", row[5]);
    body.replaceText("{{Service One}}", row[6]);
    body.replaceText("{{Service Two}}", row[7]);
    body.replaceText("{{Price One}}", row[8]);
    body.replaceText("{{Price Two}}", row[9]);
    body.replaceText("{{Price Total}}", row[10]);
    body.replaceText("{{Invoice Number}}", row[11]);
    body.replaceText("{{Document Link}}", row[12]);

    // Save and close the document to apply changes
    doc.saveAndClose();

    // This will the URL of the newly created Google Doc
    const url = doc.getUrl();

    // This line puts the link (URL) to the new Google Doc into the spreadsheet,
    // specifically in the 13th column of the current row.
    // You can change which column it writes to by editing the number 13 here.
    sheet.getRange(index + 1, 13).setValue(url);
  });
}
