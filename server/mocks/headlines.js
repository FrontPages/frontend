var loremIpsum = require('lorem-ipsum');

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      headlines = [],
      router = express.Router(),
      title;

  for (var id = 1; id <= 20; id++) {
    title = loremIpsum({ units: 'words', count: 10 });
    headlines.push({
      id: id,
      snapshot: `http://lorempixel.com/g/209/250/business/${id % 10}`,
      title: title,
      url: 'http://nytimes.com'
    });
  }

  router.get('/', function(req, res) {
    res.send({
      'headlines': headlines
    });
  });

  app.use('/api/v1/headlines', router);
};
