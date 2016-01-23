import Ember from 'ember';

export default Ember.Controller.extend({
  headlines: Ember.computed('model', function() {
    return this.store.query('headline', { snapshot_id: this.get('model.id') });
  }),

  actions: {
    stopHeadlineClickPropagation: Ember.observer('headlines.[]', function() {
      Ember.run.next(function() {
        Ember.$('.snapshot-headlines-list').on('click', 'a', function(e) {
          e.stopPropagation();
        });
      });
    })
  }
});
