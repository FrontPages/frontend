import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    var coverflow = Ember.$(this.get('element')).coverflow({
      animateStep(event, cover, offset, isVisible, isMiddle, sin, cos) {
        $(cover).find('img, figcaption').css({ opacity: 1 - Math.sqrt(Math.abs(offset)) });
      },
      density: 2,
      enableWheel: false,
      innerAngle: 0,
      innerScale: 0.85,
      outerAngle: 0,
      outerScale: 0.1,
    });

    this.set('coverflow', coverflow);
  },

  refresh: Ember.observer('observeForRefresh', function() {
    Ember.run.next(() => {
      this.get('coverflow').coverflow('refresh');
      this.get('coverflow').coverflow('index', 0);
    });
  })
});
