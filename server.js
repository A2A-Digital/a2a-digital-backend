var express = require('express'),
    cors = require('cors')
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(cors())
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 4000;
    var receiver = 'pensereyotdom15@kit.edu.kh';
    var pwd = 'password';
    app.get('/', function (req, res) {
      res.render('index');
    });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: receiver,
              pass: pwd
          }
      });
      let mailOptions = {
        from: receiver,
        to: 'a2adigital@kit.edu.kh',
        subject: req.body.name,
        text: req.body.country, // plain text body
        html: `<h3>Email: ${req.body.email}</h3> 
              <h3>Name: ${req.body.name}</h3> 
              <h3>Country: ${req.body.country}</h3>
              <h3>Feedback: ${req.body.feedback}</h3>` // html body
  };
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
