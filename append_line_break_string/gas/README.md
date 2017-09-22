# Append line break strings into each N charactors
This tools is for Google Spread Sheet and written in Google Apps Script.

## Features
1. (Single Cell) Text will be converted automatically
    - Type text anywhere on "B2:B20"
    - Converted text will be inserted on Column "C" with "\n" strings automatically
    - Do not use Copy and Paste
1. (Multi Cells) Text will be converted after clicked "Convert" button
    - Able to convert multi rows at once
    - Able to use "Copy and Paste"

## Usage
1. Copy [append_line_break_string.js](https://github.com/ryotsun/misc-tools/blob/master/append_line_break_string/gas/append_line_break_string.js) and Paste in Script Editor on Google Spread Sheet.

1. Put the "Convert" button via "Insert -> Drawing"  
    ![SpreadSheet](https://github.com/ryotsun/misc-tools/blob/master/assets/append_line_break_string/append_line_break.png)
    
1. Click "Assign script"  
    ![Assign script](https://github.com/ryotsun/misc-tools/blob/master/assets/append_line_break_string/assign_script.png)
    
1. Put "ConvertAll" into text area  
    ![Put function name](https://github.com/ryotsun/misc-tools/blob/master/assets/append_line_break_string/put_function_name.png)

### for multiple rows
- Procedure
    1. Paste copied multi rows on column "B"
    1. Click "Convert" button
