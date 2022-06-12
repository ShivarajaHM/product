var express = require('express');
var user = express.Router();

// Home page route.
user.get('/', function (req, res) {
  res.send('user home page');
})

module.exports = user;