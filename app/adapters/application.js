import DS from 'ember-data';

var host = window.location.hostname == 'localhost' ? null : 'http://linkfixer.herokuapp.com';

export default DS.RESTAdapter.extend({
  host: host
});
