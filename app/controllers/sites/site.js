import Ember from 'ember';

var onload = function() {
  var $img = Ember.$(this);
  $img.parents('.site-snapshot-image-loading')
      .removeClass('site-snapshot-image-loading')
      .css('background-color', '');
  $img.hide()
      .fadeIn();
};

export default Ember.Controller.extend({
  // Empty GIF courtesy of http://stackoverflow.com/a/14115340/974981
  emptyGIF: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  selectedSnapshot: null,

  changeSnapshot: Ember.computed(function() {
    return (event, cover, index) => {
      this.set('currentIndex', index);
    };
  }),

  snapshots: Ember.computed(function() {
    return this.store.findAll('snapshot');
  }),

  filteredSnapshots: Ember.computed('snapshots.[]', 'model', function() {
    return this.get('snapshots').filter((snapshot) => {
      return snapshot.get('site.id') === this.get('model.id');
    });
  }),

  loadImagesObserver: Ember.observer('filteredSnapshots.[]', function() {
    this._loadImages();
  }),

  _loadImages() {
    Ember.run.next(() => {
      Ember.$('.site-snapshot-image img').each(function() {
        var needsToLoad = Ember.$(this).parent('.site-snapshot-image').hasClass('site-snapshot-image-loading');
        if (!needsToLoad) { return; }

        Ember.$(this)
          .load(onload)
          .attr('src', Ember.$(this).data('src'));
      });
    });
  },

  actions: {
    loadImages() {
      this._loadImages();
    }
  }
});
