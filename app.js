var express = require('express');
var app = express();


app.get('/problem', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/problem', (req, res) => {
  return res.send('Received a POST HTTP method /problem');
});

app.post('/generateAnswer', (req, res) => {
  return res.send('Received a POST HTTP method /generateAnswer');
});

app.listen(3000);
