# auto-pop-doc
Small script that will auto fill hundreds of documents at once from data in google sheets. Good for small businesses looking to auto populate contacts, invoices, etc. 

## Features

- Automatically generates Google Docs from a template based on spreadsheet data
- Replaces placeholders in the document with data from your sheet
- Saves new documents in a specified Google Drive folder
- Logs the generated document URLs back into your spreadsheet for easy access

## Setup Instructions

1. **Create your Google Doc template:**

   - Design your template document in Google Docs.
   - Use placeholders wrapped in double curly braces like `{{Company Name}}`, `{{Invoice Number}}`, etc.  
   - Make sure the placeholder names match the column data you’ll provide in your Google Sheet.

2. **Prepare your Google Sheet:**

   - Add all your data rows, filling in the information that should replace each placeholder in your template. For example, if your template has `{{Company Name}}` and `{{Invoice Number}}`, your sheet should have columns with customer names and invoice numbers for each row.
   - Make sure the first row is a header row with clear column names that match your placeholders—this helps keep data organized.
   - Leave the last column (e.g., Document Link) empty. The script will write the URL of each generated Google Doc into this column, so name it accordingly (Document Link is recommended).

3. **Update the script:**

   - Replace `'Enter template ID'` in the script with your Google Doc template file ID.
   - Replace `'Enter folder ID'` with the ID of the folder where you want to save new documents.
   - Replace `'Name of your sheet'` with the exact name of your Google Sheet tab.

4. **Add the script to your Google Sheet:**

   - Open your Google Sheet.
   - Click **Extensions > Apps Script**.
   - Copy and paste the script into the editor.
   - Save the script.

5. **Run the script:**

   - Reload your Google Sheet.
   - You’ll see a new menu option after 'help' called **AutoFill Docs**.
   - Click **AutoFill Docs > Create New Docs**.
   - The script will generate documents for rows without a URL and write the links back to your sheet.

## Notes

- Make sure you have edit access to the template and destination folder.
- You need to authorize the script the first time you run it.
- You can fill in several at once, no limit.  
- The script skips the header row and any rows that already have a URL in the designated column.

