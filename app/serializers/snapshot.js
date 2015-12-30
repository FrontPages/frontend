import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    site: 'site_id'
  }
});
