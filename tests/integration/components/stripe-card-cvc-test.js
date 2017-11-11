import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-card-cvc', 'Integration | Component | stripe card cvc', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{stripe-card-cvc}}`);

  assert.equal(this.$().text().trim(), '');
});
