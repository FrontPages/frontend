import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('snapshot').then(function(snapshots) {
      return snapshots.findBy('id', params.snapshotId);
    });
  },

  afterModel(snapshot) {
    console.log('afterModel', snapshot.get('id'));
    this.controllerFor('sites.site').send('setCurrentSnapshot', snapshot);
  }
});
