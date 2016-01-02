import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this._preloadSites().then(() => {
      return this.store.findAll('snapshot');
    });
  },

  _preloadSites() {
    return this.store.findAll('site');
  }
});
