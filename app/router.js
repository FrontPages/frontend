import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sites', { path: '/' }, function() {
    this.route('site', { path: '/site/:name' });
  });
});

export default Router;
