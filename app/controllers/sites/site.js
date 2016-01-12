import Ember from 'ember';

var onload = function($wrapper) {
  return function() {
    Ember.$(this).appendTo($wrapper).hide().fadeIn(function() {
      $wrapper.removeClass('site-screenshot-image-loading');
    });
  };
};

export default Ember.Controller.extend({
  snapshots: Ember.computed(function() {
    return this.store.findAll('snapshot');
  }),

  filteredSnapshots: Ember.computed('snapshots.[]', 'model', function() {
    return this.get('snapshots').filter((snapshot) => {
      return snapshot.get('site.id') === this.get('model.id');
    });
  }),

  loadImages: Ember.observer('filteredSnapshots.[]', function() {
    Ember.run.next(() => {
      Ember.$('.site-screenshot-image').each(function() {
        Ember.$('<img alt="Screenshot">')
          .load(onload(Ember.$(this)))
          .attr('src', Ember.$(this).data('src'));
      });
    });
  }),
});
