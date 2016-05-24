"use strict"
var Sequelize = require('sequelize');
var Shift = require('./Shift');
var User = undefined;

module.exports = function(sequelize) {
  if (!User) {
    User = sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true
    });
    User.hasMany(Shift(sequelize), {
      onDelete: 'CASCADE'
    });
  };
  return User;
};
