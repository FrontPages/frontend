var snapshots = require('./snapshots.json');

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      router = express.Router(),
      title;

  router.get('/', function(req, res) {
    var filteredSnapshots = snapshots.snapshots.filter(function(snapshot) {
      return snapshot.site_id === parseInt(req.query.site_id, 10);
    });
    res.send({ snapshots: filteredSnapshots });
  });

  app.use('/snapshots', router);
};
