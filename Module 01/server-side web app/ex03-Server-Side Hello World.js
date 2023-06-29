// Ex03-Server-Side Hello World
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Example 03 - Server-Side Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})