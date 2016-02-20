import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    stopHeadlineClickPropagation: Ember.observer('headlines.[]', function() {
      Ember.run.next(function() {
        Ember.$('.headlines-list').on('click', 'a', function(e) {
          e.stopPropagation();
        });
      });
    })
  }
});
