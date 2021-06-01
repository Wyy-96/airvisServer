const express = require('express');
const fs = require('fs');
const router = express.Router();
module.exports = router;


router.get('/getWindData', (req, res) => {
  const jsonData = {};

  let rawdata = fs.readFileSync('./data/china.json');
  let china = JSON.parse(rawdata);
  let winddata = fs.readFileSync('./data/CN-Reanalysis2013010312.json');
  let data = JSON.parse(winddata);
  jsonData.china = china
  jsonData.winddata = data
  res.json(jsonData)
})


router.get('/getLineOverData', (req, res) => {
  const jsonData = {};

  let rawdata = fs.readFileSync('./data/Change.json');
  let LineOverData = JSON.parse(rawdata);

  jsonData.LineOverData = LineOverData
  res.json(jsonData)
})