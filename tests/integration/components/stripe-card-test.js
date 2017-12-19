import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';
import env from 'dummy/config/environment';

moduleForComponent('stripe-card', 'Integration | Component | stripe card', {
  integration: true,
  beforeEach() {
    window.Stripe = StripeMock;

    let config = {
      mock: true,
      publishableKey: env.stripe.publishableKey
    };

    this.register('config:stripe', config, { instantiate: false });
    this.inject.service('stripev3', 'config', 'config:stripe');
  }
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

test('yields out error message', function(assert) {
  this.stripeError = { message: 'oops' };
  this.render(hbs`
    {{#stripe-card stripeError=stripeError as |stripeElement stripeError|}}
      {{stripeError.message}}
    {{/stripe-card}}
  `);

  assert.equal(this.$().text().trim(), 'oops');
});
