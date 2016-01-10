import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('site').then((sites) => {
      return sites.sortBy('name');
    });
  },

  renderTemplate() {
    var controller = this.controllerFor('sites');
    this.render('sites');
    Ember.run.next(() => {
      controller.set('rendered', true);
    });
  },

  actions: {
    didTransition() {
      this.replaceWith('sites.site', this.modelFor('sites').get('firstObject.dasherizedName'));
    }
  }
});
