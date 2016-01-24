import { moduleForModel, test } from 'ember-qunit';

moduleForModel('site', 'Unit | Model | site', {
  needs: ['model:snapshot']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
