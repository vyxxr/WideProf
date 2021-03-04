const express = require('express')
const app = express()

const data = require('./src/database/database.json')
 
app.get('/', function (req, res) {
  res.json(data);
})
 
app.listen(3000)