'use strict'
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './catographiedb.sqlite'
  });


  module.exports = sequelize