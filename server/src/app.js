var express = require('express');
var app     = express();
var path    = require('path');

app.use('/public', express.static('./src/public'));

app.get('/', function(req, res) {
  res.sendfile('./src/public/views/index.html');
});

app.listen(3000, function() {
  console.log("Running at Port 3000");
});
