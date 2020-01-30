const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');
const app = express();

app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const mailchimpInstance   = 'us4',
    listUniqueId        = 'bf35bd205b',
    mailchimpApiKey     = 'bc7e0e1dd18754c965a43c263392f50c-us4';

app.post('/signup', (req, res) => {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstname,
            'LNAME': req.body.lastname
          }
        })
            .end((err, response) => {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
                console.log(response.body);
              } else {
                res.send('Sign Up Failed :(');
              }
          });
          
});