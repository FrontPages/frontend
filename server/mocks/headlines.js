var json = require('./headlines.json');

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      router = express.Router();

  router.get('/', function(req, res) {
    res.send(json);
  });

  app.use('/headlines', router);
};
