import Ember from 'ember';

export default Ember.Controller.extend({
  headlines: Ember.computed('model', function() {
    return this.store.query('headline', { snapshot_id: this.get('model.id') });
  })
});
