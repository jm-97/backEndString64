const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.json({a:1})
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })