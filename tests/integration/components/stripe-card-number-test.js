import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-card-number', 'Integration | Component | stripe card number', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{stripe-card-number}}`);

  assert.equal(this.$().text().trim(), '');
});
