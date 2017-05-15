var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var mongoStore = require('connect-mongo')(express)
var port = process.env.PORT || 3000
var app = express()
var fs = require('fs')
var dbUrl = 'mongodb://localhost/imooc-movie'

// mongoose.connect(dbUrl)
app.set('views', './app/views/pages')
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index', {
    title: 'imooc 首页'
  })
})

app.listen(port)
app.use(express.static(path.join(__dirname, 'public')))

console.log('app started on port ' + port)

