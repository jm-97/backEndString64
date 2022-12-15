const express = require('express')

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const app = express()
const port = 3000;
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'justfortestingpurpuse@outlook.it',
    pass: 'y3wyfwXdH$^EfsXh'
  }
});

app.use((req, res, next) => {
  //allow access from every, elminate CORS
  res.setHeader('Access-Control-Allow-Origin','*');
  res.removeHeader('x-powered-by');
  //set the allowed HTTP methods to be requested
  res.setHeader('Access-Control-Allow-Methods','POST');
  //headers clients can use in their requests
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  //allow request to continue and be handled by routes
  next();
});


app.post('/sendMail',jsonParser, (req, res) => {
  console.log('req.body.msg',req.body.msg)
  let mailOptions = {
    from: 'justfortestingpurpuse@outlook.it',
    to: 'manujose897@gmail.com',
    subject: 'Base64 - Contact me',
    text: `
    name: ${req.body.name}
    mail: ${req.body.name}
    msg: ${req.body.msg}
    
    `
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.json({a:error})
    } else {
      console.log('Email sent: ' + info.response);
      
    res.json({info:info.response})
    }
  });
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })