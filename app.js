const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/students', function (req, res) {
  var data = [
    {id:1,name:'Cezar'},
    {id:2,name:'mhmd'},
    {id:3,name:'rony'},
    {id:4,name:'abbess'},
    {id:5,name:'abu riad'},
    {id:6,name:'farid'},
  ]
  res.send(data)
})


app.listen(PORT)