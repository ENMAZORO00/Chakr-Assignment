const express = require('express');
const app = express();
const port = 8000;

const fs = require('fs');
const csv = require('csv-parser');

const filePath = 'dataset.csv';
const x = 'Timestamp'; 
const xdata = [];
const y = 'Profit Percentage'; 
const ydata = [];


fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    if (x in row) {
      xdata.push(row[x]);
    } 
  })

  fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    if (y in row) {
      ydata.push(row[y]);
    } 
  })

const mydata=[
   xdata,ydata
];

app.get('/api/data', (req, res) => {  
  res.json(mydata);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
