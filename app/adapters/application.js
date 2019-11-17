import DS from 'ember-data';

var host = window.location.hostname === 'localhost' ? null : 'https://front-pages.herokuapp.com';

export default DS.RESTAdapter.extend({
  host: host
});
