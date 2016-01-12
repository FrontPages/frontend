import Ember from 'ember';

export default Ember.Controller.extend({
  // Empty GIF courtesy of http://stackoverflow.com/a/14115340/974981
  emptyGIF: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",

  snapshots: Ember.computed(function() {
    return this.store.findAll('snapshot');
  }),

  filteredSnapshots: Ember.computed('snapshots.[]', 'model', function() {
    return this.get('snapshots').filter((snapshot) => {
      return snapshot.get('site.id') === this.get('model.id');
    });
  }),

  attachImageLoadListener: Ember.observer('filteredSnapshots.[]', function() {
    Ember.run.next(() => {
      Ember.$('.site-screenshot-image img').load(function() {
        Ember.$(this).parent().removeClass('site-screenshot-image-loading');
      }).each(function() {
        Ember.$(this).attr('src', Ember.$(this).data('src'));
      });
    });
  }),
});
