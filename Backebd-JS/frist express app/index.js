require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("nimadotcom")
})

app.get('/login',(req,res) => {
    res.send(`<h2>This is a login Page</h2>`)
})

app.get('/youtube',(req,res) => {
    res.send(`<h3>Nihal gamerz</h3>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})