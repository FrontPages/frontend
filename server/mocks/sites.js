var loremIpsum = require('lorem-ipsum');

var fetchSiteById = function(id) {
  return function(site) {
    return site.id === parseInt(id, 10);
  }
}


/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      sites = [],
      router = express.Router(),
      title;

  for (var id = 1; id <= 20; id++) {
    name = loremIpsum({ units: 'words', count: 2 });
    sites.push({
      id: id,
      name: name,
      url: 'http://nytimes.com'
    });
  }

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

  app.use('/api/v1/sites', router);
};
