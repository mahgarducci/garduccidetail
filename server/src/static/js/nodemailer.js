var nodemailer = require('nodemailer');
var contactForm = require('index.html');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcusgarducci@gmail.com',
    pass: 'asteriscos'
  }
});

var mailOptions = {
  from: document.getElementById("email"),
  to: 'marcusgarducci@gmail.com',
  subject: 'Garducci Detail - Contato',
  text: 'Telefone: ' + document.getElementById("phone") + '\n' +
  'Comentário: ' + document.getElementById("messenge")
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

res.redirect("/index.html");