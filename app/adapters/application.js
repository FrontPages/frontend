import DS from 'ember-data';

var host = window.location.hostname == 'localhost' ? null : 'http://front-pages.herokuapp.com';

export default DS.RESTAdapter.extend({
  host: host
});
