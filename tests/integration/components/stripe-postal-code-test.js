import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-postal-code', 'Integration | Component | stripe postal code', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{stripe-postal-code}}`);

  assert.equal(this.$().text().trim(), '');
});
