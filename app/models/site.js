import DS from 'ember-data';

export default DS.Model.extend({
  snapshots: DS.hasMany('snapshot'),
  name: DS.attr('string'),
  url: DS.attr('string')
});
