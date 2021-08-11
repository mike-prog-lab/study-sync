const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/style.css'));
});

app.get('/index.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.js'));
});

console.log(`PLANNING TO USE PORT: ${port}`);
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}!`));