var express = require('express')
const product = require('../services/product')
const user = require('../services/user')

var router = express.Router();

router.use('/product', product);
router.use('/user', user)


module.exports = router;