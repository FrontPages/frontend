import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  dasherizedName: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
  name: DS.attr('string'),
  shortcode: DS.attr('string'),
  snapshots: DS.hasMany('snapshot'),
  url: DS.attr('string')
});
