import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    var coverflow = Ember.$(this.get('element')).coverflow({
      animateStep: this.get('animateStep'),
      density: 1,
      enableWheel: false,
      innerAngle: 0,
      innerScale: 0.95,
      outerAngle: 0,
      outerScale: 0.1,
    });

    this.set('coverflow', coverflow);
  },

  refresh: Ember.observer('observeForRefresh', function() {
    Ember.run.next(() => {
      this.get('coverflow').coverflow('index', 0);
      this.get('coverflow').coverflow('refresh');
    });
  })
});
