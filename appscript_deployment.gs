// respective sheet url
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1MjJntvy-_qKH8K5eHM-VNNgcDYH79iUq8D9AxaFo5i4/edit#gid=0"); 

//if you have changed your sheet name then replace the below Sheet1 with your sheet name
const data_collection_sheet = sheets.getSheetByName("Creditplus");

function doPost(e) {
  try {
    // let data = e.parameter;
    let data = JSON.parse(JSON.stringify(e));

    // let data = {'clientIdFs':'GA1.33.1234567890.1234567890', 'creditplusValue':'dsfcvdfcxrefeeff'};

    if (data.parameter.clientIdFs) {
      var response_date_1 = new Date();
    }

    data_collection_sheet.appendRow([data.parameter.clientIdFs, data.parameter.creditplusValue, response_date_1]);
    // data_collection_sheet.appendRow([data]);
    // data_collection_sheet.appendRow([obj]);

    return ContentService.createTextOutput("success")
  } catch (err) {
    data_collection_sheet.appendRow([err]);
    GmailApp.sendEmail("test123@gmail.com", "[Test] Creditplus value collection API error", err);
  }

}
