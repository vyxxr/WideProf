const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use("/", express.static(__dirname + "/public"));

const data = require('./src/database/database.json')
 
app.get('/', function (req, res) {
  res.json(data);
})

app.post('/login', (req, res) => {
    const user = req.body
    return res.send(user)
})
 
app.listen(port, () => {
  console.log(`O servidor está ativo em localhost:${port}`)
})