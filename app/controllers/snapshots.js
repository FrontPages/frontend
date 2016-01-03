import Ember from 'ember';

export default Ember.Controller.extend({
  snapshotSorting: ['created_at:desc'],
  siteSorting: ['name'],
  sortedSites: Ember.computed.sort('sites', 'siteSorting'),
  sortedSnapshots: Ember.computed.sort('model', 'snapshotSorting'),

  sites: Ember.computed(function() {
    return this.store.findAll('site');
  })
});
