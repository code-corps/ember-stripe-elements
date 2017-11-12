/* global Stripe */
import Service from '@ember/service';
import { setProperties } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { resolve } from 'rsvp';
import loadScript from 'ember-stripe-elements/utils/load-script';

export default Service.extend({
  config: null,
  didConfigure: false,
  didLoad: false,

  lazyLoad: readOnly('config.lazyLoad'),
  mock: readOnly('config.mock'),
  publishableKey: readOnly('config.publishableKey'),

  init() {
    this._super(...arguments);

    let lazyLoad = this.get('lazyLoad');
    let mock = this.get('mock');

    if (!lazyLoad || mock) {
      this.configure();
    }
  },

  load() {
    let lazyLoad = this.get('lazyLoad');
    let mock = this.get('mock');
    let shouldLoad = lazyLoad && !mock

    let doLoad = shouldLoad ? loadScript("https://js.stripe.com/v3/") : resolve();

    return doLoad.then(() => {
      this.configure();
      this.set('didLoad', true);
    });
  },

  configure() {
    let didConfigure = this.get('didConfigure');

    if (!didConfigure) {
      let publishableKey = this.get('publishableKey');

      let { elements, createToken, createSource, retrieveSource, paymentRequest } = new Stripe(publishableKey);
      setProperties(this, { elements, createToken, createSource, retrieveSource, paymentRequest });

      this.set('didConfigure', true);
    }
  }
});
