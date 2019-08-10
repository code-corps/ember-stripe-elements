import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';
import StripeService from 'dummy/services/stripev3';
import env from 'dummy/config/environment';

module('Integration | Component | stripe-elements', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    window.Stripe = StripeMock;
    const config = {
      mock: true,
      publishableKey: env.stripe.publishableKey,
    };

    this.owner.register(
      'service:stripev3',
      StripeService.create({ config }),
      { instantiate: false }
    );
  });

  test('it renders single-line element', async function (assert) {
    assert.expect(0);

    await render(hbs`
      {{#stripe-elements as |elements|}}
        {{elements.card}}
      {{/stripe-elements}}
    `);
  });

  test('it renders individual elements', async function (assert) {
    assert.expect(0);

    await render(hbs`
      {{#stripe-elements as |elements|}}
        {{elements.cardNumber}}
        {{elements.cardExpiry}}
        {{elements.cardCvc}}
        {{elements.postalCode}}
      {{/stripe-elements}}
    `);
  });
});
