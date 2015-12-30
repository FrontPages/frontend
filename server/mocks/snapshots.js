/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      snapshots = [],
      router = express.Router(),
      title;

  for (var id = 1; id <= 20; id++) {
    snapshots.push({
      created_at: Date.now(),
      id: id,
      site: id,
      file_path: `http://lorempixel.com/g/209/250/business/${id % 10}`
    });
  }

  router.get('/', function(req, res) {
    res.send({
      'snapshots': snapshots
    });
  });

  app.use('/snapshots', router);
};
