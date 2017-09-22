// attach "\n" string into each N charactors
var char_length = 20;

// Execute "onEdit()" after spread sheet has been changed.
function onEdit(e) {
  var current_sheet = e.source.getActiveSheet();
  var row = e.range.getRow();
  var col = e.range.getColumn();
  var cell_value = e.value;
  var old_value = e.oldValue;
  
  if (row !== 1 && col == 2) {
    var range = current_sheet.getDataRange();
    var text = "";
    if (old_value !== "") {
      var str_arr = splitStringsByLength(cell_value, char_length);
      text = str_arr.join('\\n');
    }
    range.getCell(row, col + 1).setValue(text);
  }
}

// Execute after clicked "Convert" button.
function convertAll() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var current_sheet = sheet.getActiveSheet();
  var range = current_sheet.getRange(2, 2, current_sheet.getMaxRows() - 1);
  var values = range.getValues();
  
  var pasted_range = current_sheet.getRange(2, 3, current_sheet.getMaxRows() - 1);
  for (var row in values) {
    var orig_text = values[row][0];
    var str_arr = splitStringsByLength(orig_text, char_length);
    var text = str_arr.join('\\n');
    pasted_range.getCell(parseInt(row, 10) + 1, 1).setValue(text);
  }
}

function splitStringsByLength(text, length) {
  var text_array = text.split('');
  var count = 0;
  var str = '';
  
  var ret_text_array = [];
  
  for (i = 0, l = text_array.length; i < l; i++) {
    var n = escape(text_array[i]);
    
    if (n.length < 4) {
      count++;
    } else {
      count += 2;
    }
    
    if (count > length) {
      ret_text_array.push(str);
      count = 1;
      str = '';
    }
    
    str += text.charAt(i);
    
    if (i === text_array.length - 1) {
      ret_text_array.push(str)
    }
  }
  return ret_text_array;
}
