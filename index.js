/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-stripe-elements',

  contentFor(type, config) {
    let stripeConfig = config.stripe || {};

    var lazyLoad = stripeConfig.lazyLoad;
    var mock = stripeConfig.mock;

    if (type === 'body' && !lazyLoad && !mock) {
      return '<script type="text/javascript" src="https://js.stripe.com/v3/"></script>';
    }
  }
};
