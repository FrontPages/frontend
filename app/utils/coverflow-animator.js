import Ember from 'ember';

export default Ember.Object.extend({
  bodyBackgroundColor: Ember.computed(function() {
    return Ember.$('body').css('background-color');
  }),

  coverBackgroundColor: Ember.computed(function() {
    return this.get('firstImageWrapper').css('background-color');
  }),

  coverBorderColor: Ember.computed(function() {
    return this.get('firstImageWrapper').css('border-color');
  }),

  firstImageWrapper: Ember.computed(function() {
    return Ember.$('.site-screenshot-image:eq(0)');
  }),

  calculateBackgroundColor(opacity) {
    return Ember.$.xcolor.opacity(this.get('bodyBackgroundColor'), this.get('coverBackgroundColor'), opacity);
  },

  calculateBorderColor(opacity) {
    return Ember.$.xcolor.opacity(this.get('bodyBackgroundColor'), this.get('coverBorderColor'), opacity);
  },

  animateStep(event, cover, offset, isVisible) {
    if (!isVisible) { return; }

    var opacity = 1 - Math.sqrt(Math.abs(offset)),
        $imageWrapper = Ember.$(cover).find('.site-screenshot-image');

    Ember.$(cover).find('img, figcaption').css({ opacity: opacity });
    $imageWrapper.css('border-color', this.calculateBorderColor(opacity));

    if ($imageWrapper.hasClass('site-screenshot-image-loading')) {
      $imageWrapper.css('background-color', this.calculateBackgroundColor(opacity));
    }
  }
});
