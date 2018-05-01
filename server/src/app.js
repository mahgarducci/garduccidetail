var express = require("express");
var app     = express();

app.get('/',function(req,res){
  res.sendFile('src/views/index.html');
  express.static(__dirname + '/static/css');
  //It will find and locate index.html from View or Scripts
});

app.listen(3000);

console.log("Running at Port 3000");