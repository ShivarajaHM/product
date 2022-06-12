var express = require('express');
var product = express.Router();

// Home page route.
product.get('/', function (req, res) {
  res.send('product home page');
})

module.exports = product;
