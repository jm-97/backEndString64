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