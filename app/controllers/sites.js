/* global componentHandler */
import Ember from 'ember';

export default Ember.Controller.extend({
  upgradeLayout: Ember.observer('rendered', function() {
    var layoutElement = Ember.$('.sites-layout').get(0);
    componentHandler.upgradeElement(layoutElement);
  })
});
