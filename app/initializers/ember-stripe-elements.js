import config from '../config/environment';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';

export function initialize() {
  const application = arguments[1] || arguments[0];
  let stripeConfig = config.stripe || {};

  application.register('config:stripe', stripeConfig, { instantiate: false });
  application.inject('service:stripev3', 'config', 'config:stripe');

  if (typeof FastBoot !== 'undefined' || stripeConfig.mock) {
    window.Stripe = StripeMock;
  }
}

export default {
  name: 'ember-stripe-elements',
  initialize
};
