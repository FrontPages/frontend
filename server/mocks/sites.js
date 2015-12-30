var sites = require('./sites.json');

var fetchSiteById = function(id) {
  return function(site) {
    return site.id === parseInt(id, 10);
  }
}

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      router = express.Router(),
      title;

  router.get('/', function(req, res) {
    res.send({
      'sites': sites
    });
  });

  router.get('/:id', function(req, res) {
    var site = sites.find(fetchSiteById(req.params.id));
    res.send({
      'site': site
    });
  });

  app.use('/sites', router);
};
