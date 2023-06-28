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
app.get('/', (req, res) => {
  const files = fs.readdirSync('uploads/');
  res.render('index', { files });
});

app.post('/upload', upload.single('csvFile'), (req, res) => {
  res.redirect('/');
});

app.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const rows = [];

  fs.createReadStream(`uploads/${filename}`)
    .pipe(csv())
    .on('data', (row) => rows.push(row))
    .on('end', () => {
      res.render('csv', { rows });
    });
});

app.get('/delete/:filename', (req, res) => {
  const { filename } = req.params;

  fs.unlink(`uploads/${filename}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error deleting file');
    }

    res.redirect('/');
  });
});

app.put('/rename/:filename', express.json(), (req, res) => {
  const { filename } = req.params;
  const { newFileName } = req.body;

  const filePath = `uploads/${filename}`;
  const newFilePath = `uploads/${newFileName}`;

  fs.rename(filePath, newFilePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error renaming file');
    }

    res.sendStatus(200);
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
