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
   - Give your sheet tab the exact name referenced in the script. For simplicity, you can name your sheet tab the same as your Google Sheets file. Then, update the script’s getSheetByName('Enter Sheet Name') to match the sheet tab name exactly.

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

**Sample Invoice Follows** 
YOUR COMPANY NAME
123 COMPANY STREET
COMPANY CITY, ST 
POSTAL/ZIP

Invoice Example  
{{Invoice Number}}

PREPARED FOR
{{Company Name}}
{{Company Address}}

PREPARED DATE
{{Today Date}}

EXP. DATE
{{Service Date}}

{{Service Name}}
Price
{{Service One}} 
{{Price One}}
{{Service Two}} 
{{Price Two}}
Total: {{Price Total}}

TERMS AND CONDITIONS:
This invoice is subject to the following terms and conditions and shall remain valid until the expiration date specified above {{Service Date}}.
Delivery Timeline: Delivery will be completed within 5 business days following receipt of payment totaling {{Price Total}}.

Delivery Location: Delivery will be made FOB (Free On Board) to the facility of {{Company Name}} located at {{Company Address}}.

Service Details: For a comprehensive overview of deliverables, timelines, and subsequent steps, please refer to your Service Outline Deck. Should you have any questions or require further clarification, do not hesitate to contact us.

Payment Terms:
 Payment in full, amounting to {{Price Total}}, is due within 30 days of the invoice date {{Today Date}}. Please ensure timely payment to avoid any late fees or service interruptions.

 Payments can be made via any accepted payment methods—e.g., bank transfer, credit card, etc. If you have any questions regarding payment, please contact our billing department promptly.

 Failure to remit payment within the specified timeframe may result in additional charges or suspension of services until the account is settled.

We appreciate your trust in our services and look forward to a successful partnership.

{{To Name}}

{{Company Name}}

{{Today 
Date}}
