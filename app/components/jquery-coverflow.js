import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    var coverflow = Ember.$(this.get('element')).coverflow(this.get('_options'));
    this.set('coverflow', coverflow);
  },

  _refresh: Ember.observer('observeForRefresh', function() {
    Ember.run.next(() => {
      this.get('coverflow').coverflow('index', 0);
      this.get('coverflow').coverflow('refresh');
    });
  }),

  _optionList: ['animateStep',
                'animateComplete',
                'change',
                'confirm',
                'density',
                'duration',
                'easing',
                'enableClick',
                'enableKeyboard',
                'enableWheel',
                'index',
                'innerAngle',
                'innerCss',
                'innerOffset',
                'innerScale',
                'outerAngle',
                'outerCss',
                'outerOffset',
                'outerScale',
                'select'],

  _options: Ember.computed('_optionList.[]', function() {
    var options = {};
    this.get('_optionList').forEach((option) => {
      if (Ember.typeOf(this.get(option)) !== 'undefined') {
        options[option] = this.get(option);
      }
    });
    return options;
  })
});
