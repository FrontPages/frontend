import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('date'),
  site: DS.belongsTo('site'),
  snapshot: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string')
});
