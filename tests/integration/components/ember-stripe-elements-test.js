import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-stripe-elements', 'Integration | Component | ember stripe elements', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-stripe-elements}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-stripe-elements}}
      template block text
    {{/ember-stripe-elements}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
