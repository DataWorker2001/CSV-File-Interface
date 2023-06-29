const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes

// Home page route
app.get('/', (req, res) => {
  // Read the files in the 'uploads' directory synchronously
  const files = fs.readdirSync('uploads/');
  res.render('index', { files });
});

// File upload route
app.post('/upload', upload.single('csvFile'), (req, res) => {
  // Redirect back to the home page after the file has been uploaded
  res.redirect('/');
});

// View file data route
app.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const rows = [];

  // Read the CSV file and parse the data using the 'csv-parser' library
  fs.createReadStream(`uploads/${filename}`)
    .pipe(csv())
    .on('data', (row) => rows.push(row))
    .on('end', () => {
      // Render the 'csv' template with the retrieved rows
      res.render('csv', { rows });
    });
});

// File deletion route
app.get('/delete/:filename', (req, res) => {
  const { filename } = req.params;

  // Delete the specified file using the 'fs.unlink' method
  fs.unlink(`uploads/${filename}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error deleting file');
    }

    // Redirect back to the home page after the file has been deleted
    res.redirect('/');
  });
});

// File renaming route
app.put('/rename/:filename', express.json(), (req, res) => {
  const { filename } = req.params;
  const { newFileName } = req.body;

  const filePath = `uploads/${filename}`;
  const newFilePath = `uploads/${newFileName}`;

  // Rename the file using the 'fs.rename' method
  fs.rename(filePath, newFilePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error renaming file');
    }

    // Send a success status code
    res.sendStatus(200);
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
