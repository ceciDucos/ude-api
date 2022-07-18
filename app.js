var express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send('ude-api is running correctly!');
});

app.get('/problem', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/problem', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.post('/generateAnswer', (req, res) => {
  return res.send('Received a POST HTTP method /generateAnswer');
});

app.listen(3000);
