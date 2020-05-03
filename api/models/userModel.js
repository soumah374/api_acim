'use strict';

const { Sequelize } = require('sequelize');
var sequelize = require('../../database/connexion')

var User = sequelize.define('users',{
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
}); 


module.exports = User;
