import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-postal-code', 'Integration | Component | stripe postal code', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stripe-postal-code}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stripe-postal-code}}
      template block text
    {{/stripe-postal-code}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
