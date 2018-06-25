var express = require('express');
var app     = express();
var path    = require('path');
const nodemailer = require('nodemailer');

app.use(express.json());

app.use('/public', express.static('./src/public'));

app.get('/', function(req, res, next) {
  res.sendfile('./src/public/views/index.html');
});

// const email = $('#email').value;
// const name  = $('#name').value;
// const phone = $('#phone').value;
// const message = $('#message').value;

app.post('/send-email', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'marcusgarducci@gmail.com',
       pass: 'asteriscos'
     }
  });
  console.log(req.body);

  var mailOptions = {
    from: console.log('${req.body.email}'),
    to: "marcusgarducci@gmail.com",
    subject: "Garducci Detail - Contato",
    text: "Nome: " + `${req.body.name}` + "\n" + 
          "Telefone: " + `${req.body.phone}` + "\n" +
          "Comentário: " + `${req.body.message}`
  };
  console.log(req.body);
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