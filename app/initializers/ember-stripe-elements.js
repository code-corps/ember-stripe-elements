import EmberError from '@ember/error';
import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];

  application.register('config:ember-stripe-elements', config, { instantiate: false });

  if (!config.stripe && !config.stripe.publishableKey) {
    throw new EmberError('StripeService: Missing Stripe key, please set `ENV.stripe.publishableKey` in config.environment.js');
  }
}

export default {
  name: 'ember-stripe-elements',
  initialize
};
