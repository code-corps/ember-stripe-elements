import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-card-cvc', 'Integration | Component | stripe card cvc', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stripe-card-cvc}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stripe-card-cvc}}
      template block text
    {{/stripe-card-cvc}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
