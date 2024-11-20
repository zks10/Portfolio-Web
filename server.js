const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to receive form data
app.post("/contact", (req, res) => {
  const formData = req.body;

  // Filepath for the Excel file
  const filePath = "./contacts.xlsx";

  // Check if the file exists
  let workbook;
  if (fs.existsSync(filePath)) {
    // Read the existing file
    workbook = XLSX.readFile(filePath);
  } else {
    // Create a new workbook and add an empty sheet
    workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, sheet, "Contacts");
  }

  // Get the current sheet or create a new one
  let sheet = workbook.Sheets["Contacts"];
  let data = [];
  if (sheet) {
    data = XLSX.utils.sheet_to_json(sheet); // Read existing data from the sheet
  } else {
    sheet = XLSX.utils.json_to_sheet([]); // Create a new sheet if it doesn't exist
    XLSX.utils.book_append_sheet(workbook, sheet, "Contacts");
  }

  // Add the new form data to the existing data
  data.push(formData);

  // Write the updated data to the sheet
  const newSheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets["Contacts"] = newSheet;

  // Save the workbook
  XLSX.writeFile(workbook, filePath);

  res.json({ code: 200, message: "Data saved successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
