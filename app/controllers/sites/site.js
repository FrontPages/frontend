import Ember from 'ember';

export default Ember.Controller.extend({
  snapshots: Ember.computed(function() {
    return this.store.findAll('snapshot');
  }),

  filteredSnapshots: Ember.computed('snapshots.[]', 'model', function() {
    return this.get('snapshots').filter((snapshot) => {
      return snapshot.get('site.id') === this.get('model.id');
    });
  })
});
