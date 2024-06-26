//App password in setting
var nodemailer = require('nodemailer');

var t1 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'azartechnet@gmail.com',
    pass: 'ovqgiaemsmigrxpw'
  }
});

var mailOptions = {
  from: 'azartechnet@gmail.com',
  to: 'mohamedtechdata@gmail.com,kishothkumar4545@gmail.com',
  subject: 'Sending Email using Node.js',
  //text: 'That was easy!'
  html:'<h1 style="color:red">Welcome to MERN Stack Session</h1>'
};

t1.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});