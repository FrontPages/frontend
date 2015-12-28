import DS from 'ember-data';

export default DS.Model.extend({
  headlines: DS.hasMany('headlines'),
  name: DS.attr('string'),
  url: DS.attr('string')
});
