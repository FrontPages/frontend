import { moduleForModel, test } from 'ember-qunit';

moduleForModel('snapshot', 'Unit | Model | snapshot', {
  needs: ['model:headline', 'model:site']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
