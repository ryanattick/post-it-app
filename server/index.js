var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


app.use(express.static(__dirname + '/../builds'));
app.use(bodyParser.urlencoded({ extended: true }));









app.listen(3000, function() {
  console.log('listening on port 3000!');
});
