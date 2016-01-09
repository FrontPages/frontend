import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jquery-coverflow-cover', 'Integration | Component | jquery coverflow cover', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{jquery-coverflow-cover}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#jquery-coverflow-cover}}
      template block text
    {{/jquery-coverflow-cover}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
