var express = require('express');
var app     = express();
var path    = require('path');
const nodemailer = require('nodemailer');

app.use(express.urlencoded());

app.use('/public', express.static('./src/public'));

app.get('/', function(req, res, next) {
  res.sendfile('./src/public/views/index.html');
});

app.post('/send-email', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'marcusgarducci@gmail.com',
       pass: '@Combatte1'
     }
  });

  var mailOptions = {
    from: req.body.email,
    to: "erick.garducci@gmail.com",
    subject: "Garducci Detail - Contato",
    text: "Nome: " + `${req.body.name}` + "\n" + 
          "Telefone: " + `${req.body.phone}` + "\n" +
          "Comentário: " + `${req.body.message}`
  };

  console.log(mailOptions);
 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.sendfile('./src/public/views/index.html');
    } else {
      console.log('Email sent: ' + info.response);
      res.sendfile('./src/public/views/index.html');
    }
  });
});

app.listen(3000, function() {
  console.log("Running at Port 3000");
});