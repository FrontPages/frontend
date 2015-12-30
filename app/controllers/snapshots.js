import Ember from 'ember';

export default Ember.Controller.extend({
  snapshotSorting: ['created_at:desc'],
  sortedSnapshots: Ember.computed.sort('model', 'snapshotSorting')
});
