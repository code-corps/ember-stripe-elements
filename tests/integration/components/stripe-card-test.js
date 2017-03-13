import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-card', 'Integration | Component | stripe card', {
  integration: true
});

test('it renders', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#stripe-card}}
      template block text
    {{/stripe-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
