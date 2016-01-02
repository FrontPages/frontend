var snapshots = require('./snapshots.json');

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      router = express.Router(),
      title;

  router.get('/', function(req, res) {
    res.send(snapshots);
  });

  app.use('/snapshots', router);
};
