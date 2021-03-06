import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('snapshot').then(function(snapshots) {
      return snapshots.findBy('id', params.snapshotId);
    });
  }
});
