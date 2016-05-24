"use strict"
var _ = require('lodash');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', 'niko123', {
  host: 'localhost',
  dialect: 'mysql'
});

let User = (require('../models').User)(sequelize);
let Shift = (require('../models').Shift)(sequelize);

function syncDB(models) {
  if (models.length === 0) {
    return Promise.resolve();
  }
  return models[0]
    .sync()
    .then(() => {
      return syncDB(models.slice(1));
    });
}

syncDB(_.values(sequelize.models))
  .then(function() {
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  })
  .then(user => {
    Shift.create({
        startdate: new Date()
      })
      .then(shift => {
        user.addShift(shift);
      })
  });

module.exports = sequelize;
