var nodemailer = require('nodemailer');
var express = require("express");
var app = express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcusgarducci@gmail.com',
    pass: ''
  }
});

app.post("/send-email", function (req, res){
  var name      = request.query.name;
  var email     = request.query.email;
  var phone     = request.query.phone;
  var messenge  = request.query.messenge;
  var mailOptions = {
    from: email,
    to: 'marcusgarducci@gmail.com',
    subject: 'Garducci Detail - Contato',
    text: 'Nome: ' + name + '\n' + 
          'Telefone: ' + phone + '\n' +
          'Comentário: ' + messenge
  };
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  res.redirect("./src/public/views/index.html");
});

