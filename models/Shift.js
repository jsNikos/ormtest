"use strict"
var Sequelize = require('sequelize');
var Shift = undefined;

module.exports = function(sequelize) {
  if (!Shift) {
    Shift = sequelize.define('shift', {
      startdate: {
        type: Sequelize.DATE
      },
      enddate: {
        type: Sequelize.DATE
      }
    }, {
      freezeTableName: true
    });
  };
  return Shift;
};
