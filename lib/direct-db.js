const Sequelize = require('sequelize');

// connect db
const connection = new Sequelize("testdb", "root", "123456");


module.exports = connection;