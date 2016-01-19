import DS from 'ember-data';

export default DS.Model.extend({
  file_path: DS.attr('string'),
  headlines: DS.hasMany('headline'),
  site: DS.belongsTo('site'),
  created_at: DS.attr('date')
});
