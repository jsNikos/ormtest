"use strict"

var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User()
    .findAll({
      include: [models.Shift()]
    })
    .then(users => {
      return users.map(user => {
        return user.get({
          plain: true
        });
      });
    })
    .then(users => {
      res.type('json');  
      res.send(JSON.stringify(users));
    });
});

module.exports = router;
