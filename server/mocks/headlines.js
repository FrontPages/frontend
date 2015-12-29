/*jshint node:true*/
module.exports = function(app) {
  var express = require('express'),
      router = express.Router(),
      headlines = [
        {
          id: 1,
          snapshot: 'some-url',
          title: 'Some headline title',
          url: 'http://nytimes.com'
        }
      ];

  router.get('/', function(req, res) {
    res.send({
      'headlines': headlines
    });
  });

  app.use('/api/v1/headlines', router);
};
