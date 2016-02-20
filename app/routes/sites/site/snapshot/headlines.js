import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var snapshotId = this.modelFor('sites.site.snapshot').get('id');
    return this.store.query('headline', { snapshot_id: snapshotId });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.send('stopHeadlineClickPropagation');
    controller.set('snapshot', this.modelFor('sites.site.snapshot'));
  },

  renderTemplate() {
    this.render('sites.site.snapshot.headlines', { into: 'sites' });
  }
});
