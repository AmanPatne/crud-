
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('data_collection', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;


