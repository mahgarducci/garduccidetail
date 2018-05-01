var nodemailer = require('nodemailer');
var express = require("express");
//use the application off of express.
var app = express();
 //define the route for "/"

app.get("/", function (request, response){
  response.sendFile(__dirname+"/views/index.html");
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcusgarducci@gmail.com',
    pass: 'asteriscos'
  }
});

app.get("/getemail", function (request, response){
  var name      = request.query.name;
  var email     = request.query.email;
  var phone     = request.query.phone;
  var messenge  = request.query.messenge;
  var mailOptions = {
    from: name,
    to: 'marcusgarducci@gmail.com',
    subject: 'Garducci Detail - Contato',
    text: 'Telefone: ' + phone + '\n' +
    'Comentário: ' + messenge
  };
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  res.redirect("views/index.html");
});

