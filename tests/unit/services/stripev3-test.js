import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';
import env from 'dummy/config/environment';

module('Unit | Service | stripev3', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    window.Stripe = StripeMock;
    this.subject = this.owner.factoryFor('service:stripev3').create({
      config: {
        mock: true,
        publishableKey: env.stripe.publishableKey
      }
    });
  });

  test('makes Stripe.elements available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let elements = sinon.stub(service, 'elements').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    elements(mockOptions);
    elements.restore();
  });

  test('makes Stripe.createToken available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let createToken = sinon.stub(service, 'createToken').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    createToken(mockOptions);
    createToken.restore();
  });

  test('makes Stripe.createSource available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let createSource = sinon.stub(service, 'createSource').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    createSource(mockOptions);
    createSource.restore();
  });

  test('makes Stripe.createPaymentMethod available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let createPaymentMethod = sinon.stub(service, 'createPaymentMethod').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    createPaymentMethod(mockOptions);
    createPaymentMethod.restore();
  });

  test('makes Stripe.retrieveSource available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let retrieveSource = sinon.stub(service, 'retrieveSource').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    retrieveSource(mockOptions);
    retrieveSource.restore();
  });

  test('makes Stripe.paymentRequest available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let paymentRequest = sinon.stub(service, 'paymentRequest').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    paymentRequest(mockOptions);
    paymentRequest.restore();
  });

  test('makes Stripe.redirectToCheckout available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let redirectToCheckout = sinon.stub(service, 'redirectToCheckout').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    redirectToCheckout(mockOptions);
    redirectToCheckout.restore();
  });

  test('makes Stripe.retrievePaymentIntent available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let retrievePaymentIntent = sinon.stub(service, 'retrievePaymentIntent').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    retrievePaymentIntent(mockOptions);
    retrievePaymentIntent.restore();
  });

  test('makes Stripe.handleCardPayment available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let handleCardPayment = sinon.stub(service, 'handleCardPayment').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    handleCardPayment(mockOptions);
    handleCardPayment.restore();
  });

  test('makes Stripe.handleCardAction available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let handleCardAction = sinon.stub(service, 'handleCardAction').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    handleCardAction(mockOptions);
    handleCardAction.restore();
  });

  test('makes Stripe.confirmPaymentIntent available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let confirmPaymentIntent = sinon.stub(service, 'confirmPaymentIntent').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    confirmPaymentIntent(mockOptions);
    confirmPaymentIntent.restore();
  });

  test('makes Stripe.handleCardSetup available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let handleCardSetup = sinon.stub(service, 'handleCardSetup').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    handleCardSetup(mockOptions);
    handleCardSetup.restore();
  });

  test('makes Stripe.retrieveSetupIntent available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let retrieveSetupIntent = sinon.stub(service, 'retrieveSetupIntent').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    retrieveSetupIntent(mockOptions);
    retrieveSetupIntent.restore();
  });

  test('makes Stripe.confirmSetupIntent available on the service', function(assert) {
    assert.expect(1);

    let service = this.subject;
    let mockOptions = { locale: 'en' };

    let confirmSetupIntent = sinon.stub(service, 'confirmSetupIntent').callsFake(function(options) {
      assert.deepEqual(options, mockOptions, 'called with mock options');
    });

    confirmSetupIntent(mockOptions);
    confirmSetupIntent.restore();
  });

  test('it throws an error if config.stripe.publishableKey is not set', function(assert) {
    assert.expectAssertion(() => {
      this.owner.factoryFor('service:stripev3').create({
        config: {
          mock: true,
          publishableKey: null
        }
      });
    }, /Missing Stripe key/);
  });

  test('it does not throw when publishableKey is provided by load method', async function(assert) {
    this.subject = this.owner.factoryFor('service:stripev3').create({
      config: {
        mock: true,
        lazyLoad: true,
        publishableKey: null
      }
    });

    await this.subject.load('some-key');
    assert.ok(this.subject.get('didConfigure'), 'should have configured')
  });
});
