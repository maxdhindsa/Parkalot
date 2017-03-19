var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

// this returns index.html when / is visited
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//attempting to have another page 
app.get('/sampleHtml', function(req, res) {
    res.sendFile(path.join(__dirname + '/sampleHtml.html'));
});

app.get('/testing', function(req, res) {
    res.sendFile(path.join(__dirname + '/testing.html'));
});

//attempting to submuit data here
app.post('/submit', function(req,res) {
	res.send('req.params = '+req.body)
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

//list more pages here


app.listen(3000);