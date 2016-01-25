import Ember from 'ember';
import CoverflowAnimator from 'front-pages/utils/coverflow-animator';

var onload = function() {
  var $img = Ember.$(this);
  $img.parents('.site-screenshot-image-loading')
      .removeClass('site-screenshot-image-loading')
      .css('background-color', '');
  $img.hide()
      .fadeIn();
};

export default Ember.Controller.extend({
  // Empty GIF courtesy of http://stackoverflow.com/a/14115340/974981
  emptyGIF: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  selectedSnapshot: null,

  coverflowAnimator: Ember.computed(function() {
    return CoverflowAnimator.create();
  }),

  animateStep: Ember.computed('coverflowAnimator', function() {
    return this.get('coverflowAnimator.animateStep').bind(this.get('coverflowAnimator'));
  }),

  changeSnapshot: Ember.computed(function() {
    return (event, cover, index) => {
      Ember.run(() => { this.set('currentIndex', index); });

      var snapshot = this.get('slicedSnapshots')[index];
      if (snapshot) {
        this.transitionToRoute('sites.site.snapshot', snapshot.get('id'));
      }
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

  slicedSnapshotsInitialized: false,

  slicedSnapshots: Ember.computed('filteredSnapshots.[]', 'currentIndex', function() {
    if (!this.get('slicedSnapshotsInitialized')) {
      this.set('slicedSnapshotsInitialized', true);
    }

    return this.get('filteredSnapshots').slice(0, this.get('currentIndex') + 10);
  }),

  selectSnapshot: Ember.computed(function() {
    return function(event, cover, index) {
      var snapshot = this.get('slicedSnapshots')[index];
      if (snapshot) {
        this.transitionToRoute('sites.site.snapshot', snapshot.get('id'));
      }
    }.bind(this);
  }),

  observeForRefresh: Ember.computed('slicedSnapshotsInitialized',
                                    'model.id',
                                    'initialIndex', {
    set(key, value) {
      return value;
    },
    get() {
      // Coverflow refresh must occur when the DOM is redrawn from scratch. This
      // happens A) when the slicedSnapshots property is first initialized, B)
      // when the model ID changes, and C) when we're viewing a specific snapshot
      // (indicated by initialIndex).
      //
      // Note that we don't want to observe slicedSnapshots.[], because that
      // would result in a refresh on every change of currentIndex, which would
      // in turn cause visual glitches. It also isn't necessary to observe
      // slicedSnapshots.[], since jQuery Coverflow picks up new .cover elements
      // automatically with each call to animateStep() (as far as I can tell).
      //
      // Here, we'll return the current timestamp each time this property is
      // accessed, to ensure that the coverflow component gets refreshed.
      return Date.now();
    }
  }),

  loadImages: Ember.observer('slicedSnapshots.[]', function() {
    Ember.run.next(() => {
      Ember.$('.site-screenshot-image img').each(function() {
        var needsToLoad = Ember.$(this).parent('.site-screenshot-image').hasClass('site-screenshot-image-loading');
        if (!needsToLoad) { return; }

        Ember.$(this)
          .load(onload)
          .attr('src', Ember.$(this).data('src'));
      });
    });
  }),

  actions: {
    setCurrentSnapshot(snapshot) {
      Ember.run.next(() => {
        var index = this.get('filteredSnapshots').indexOf(snapshot);
        this.set('initialIndex', index);
        Ember.run.next(() => {
          this.set('observeForRefresh', index);
        });
      });
    }
  }
});
