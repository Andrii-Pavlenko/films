const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/api', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.json({ 1: 1, 2: 2 })
})

app.use(express.static('build'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))