import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('site').then((sites) => {
      return sites.findBy('dasherizedName', params.name);
    });
  }
});
