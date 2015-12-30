import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this._preloadSites();
    return this.store.findAll('snapshot');
  },

  _preloadSites() {
    this.store.findAll('site');
  }
});
