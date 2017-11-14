import Ember from 'ember';

var onload = function() {
  var $img = Ember.$(this);
  $img.parents('.site-snapshot-image-loading')
      .removeClass('site-snapshot-image-loading')
      .css('background-color', '');
  $img.hide()
      .fadeIn();
};

var SNAPSHOTS_PER_SITE = 50;

export default Ember.Controller.extend({
  // Empty GIF courtesy of http://stackoverflow.com/a/14115340/974981
  emptyGIF: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  selectedSnapshot: null,

  changeSnapshot: Ember.computed(function() {
    return (event, cover, index) => {
      this.set('currentIndex', index);
    };
  }),

  snapshots: Ember.computed('model.id', function() {
    return this.store.query('snapshot', { site_id: this.get('model.id'), limit: SNAPSHOTS_PER_SITE });
  }),

  slicedSnapshots: Ember.computed('snapshots.[]', 'model', function() {
    return this.get('snapshots').slice(0, SNAPSHOTS_PER_SITE);
  }),

  loadImagesObserver: Ember.observer('slicedSnapshots.[]', function() {
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
