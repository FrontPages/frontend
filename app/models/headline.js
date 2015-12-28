import DS from 'ember-data';

export default DS.Model.extend({
  site: DS.belongsTo('site'),
  snapshot: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string')
});
