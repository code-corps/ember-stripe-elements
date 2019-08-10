import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render, find } from '@ember/test-helpers';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';
import env from 'dummy/config/environment';
import StripeService from 'dummy/services/stripev3';

module('Integration | Component | stripe-card-cvc', function(hooks) {
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

  test('it renders', async function (assert) {
    await render(hbs`{{stripe-card-cvc}}`);

    assert.ok(find('.ember-stripe-element.ember-stripe-card-cvc'));
    assert.ok(find('[role="mount-point"]'));
  });
});
