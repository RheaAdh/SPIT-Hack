const xl = require("excel4node");

const createSheet = async (response) => {
  console.log(response);
  return new Promise(async (resolve) => {
    var wb = new xl.Workbook();
    var ws = wb.addWorksheet("Sheet");
    const headingColumnNames = ["Date", "Mode", "Category", "Amount"];
    let headingColumnIndex = 1;
    headingColumnNames.forEach((heading) => {
      ws.cell(1, headingColumnIndex++).string(heading);
    });
    let rowIndex = 2;
    response.forEach((resp) => {
      let columnIndex = 1;
      ws.cell(rowIndex, columnIndex++).string(resp.createdAt.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.methodType.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.category.toString());
      ws.cell(rowIndex, columnIndex++).string(resp.amount.toString());
      rowIndex++;
    });
    resolve(wb);
  });
};

module.exports = createSheet;
