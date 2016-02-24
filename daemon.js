var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.get('/result', function (req, res) {
  console.log('GET /', req.body)
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>hello</h1>')
})

app.post('/compute', function (req, res) {
  console.log('POST /')
  console.dir(req.body)
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(req.body))
})

var port = 63136
app.listen(port)
console.log('daemon listening at http://localhost:' + port)
