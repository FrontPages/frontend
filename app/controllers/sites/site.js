import Ember from 'ember';
import coverflowAnimator from 'front-pages/utils/coverflow-animator';

var onload = function() {
  var $img = Ember.$(this);
  $img.parents('.site-screenshot-image-loading')
      .removeClass('site-screenshot-image-loading')
      .css('background-color', '')
  $img.hide()
      .fadeIn();
};

export default Ember.Controller.extend({
  // Empty GIF courtesy of http://stackoverflow.com/a/14115340/974981
  emptyGIF: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  coverflowAnimator: coverflowAnimator,

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
      Ember.$('.site-screenshot-image img').each(function() {
        Ember.$(this)
          .load(onload)
          .attr('src', Ember.$(this).data('src'));
      });
    });
  }),
});
