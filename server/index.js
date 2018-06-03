var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


app.use(express.static(__dirname + '/../builds'));
app.use(bodyParser.urlencoded({ extended: true }));









let port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log(`Running in localhost at port ${port}!`);
});
