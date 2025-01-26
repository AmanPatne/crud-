const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../Config/db.js');

const User = sequelize.define('user', {

  id:{
    type : DataTypes.INTEGER,
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
    
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  city :{
    type : DataTypes.STRING,
    allowNull : false

  },

 mobile_no :{
    type : DataTypes.INTEGER,
    allowNull: false,
    unique  : true
  }
  
},
{
  timestamps: false 
}
);

module.exports = User;

