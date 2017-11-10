/* global Stripe */
import Ember from 'ember';

const {
  getOwner,
  Service,
  setProperties
} = Ember;

export default Service.extend({
  init() {
    this._super(...arguments);

    const config = getOwner(this).resolveRegistration('config:environment');

    if (!config.stripe && !config.stripe.publishableKey) {
      throw new Ember.Error('StripeService: Missing Stripe key, please set `ENV.stripe.publishableKey` in config.environment.js');
    }

    let { elements, createToken, createSource, retrieveSource, authorizeSource,  paymentRequest } = new Stripe(config.stripe.publishableKey);
    debugger
    setProperties(this, { elements, createToken, createSource, retrieveSource, authorizeSource,  paymentRequest });
  }
});
