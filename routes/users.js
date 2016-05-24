"use strict"

var express = require('express');
var router = express.Router();
var database = require('../services').database;

/* GET users listing. */
router.get('/', function(req, res, next) {
  let User = database.model('user');
  User.findAll()
    .then(console.log);

  res.send('respond with a resource');
});

module.exports = router;
