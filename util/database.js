const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Dev@12345', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
