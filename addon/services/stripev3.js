/* global Stripe */
import EmberError from '@ember/error';
import { getOwner } from '@ember/application';
import Service from '@ember/service';
import { setProperties } from '@ember/object';

export default Service.extend({
  init() {
    this._super(...arguments);

    const config = getOwner(this).resolveRegistration('config:environment');

    if (!config.stripe && !config.stripe.publishableKey) {
      throw new EmberError('StripeService: Missing Stripe key, please set `ENV.stripe.publishableKey` in config.environment.js');
    }

    let { elements, createToken, createSource, retrieveSource, paymentRequest } = new Stripe(config.stripe.publishableKey);
    setProperties(this, { elements, createToken, createSource, retrieveSource, paymentRequest });
  }
});
