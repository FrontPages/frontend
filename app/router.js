import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('sites', { path: '/' }, function() {
    this.route('site', { path: '/site/:name' }, function() {
      this.route('snapshot', { path: '/:snapshotId' }, function() {
        this.route('headlines', { path: '/headlines' });
      });
    });
  });
});

export default Router;
