import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-card-expiry', 'Integration | Component | stripe card expiry', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{stripe-card-expiry}}`);

  assert.equal(this.$().text().trim(), '');
});
