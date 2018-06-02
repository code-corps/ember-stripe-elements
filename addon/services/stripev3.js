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
  
  unload() {
    this.set('didConfigure', false);
    this.set('didLoad', false);
  },
  
  load(params) {
    let lazyLoad = this.get('lazyLoad');
    let mock = this.get('mock');
    let shouldLoad = lazyLoad && !mock

    let doLoad = shouldLoad ? loadScript("https://js.stripe.com/v3/") : resolve();

    return doLoad.then(() => {
      this.configure(params);
      this.set('didLoad', true);
    });
  },

  configure(params) {
    let didConfigure = this.get('didConfigure');

    if (!didConfigure) {
      let publishableKey = this.get('publishableKey');

      var _ref = new Stripe(publishableKey, params);
      
      setProperties(this, { 
        ref: _ref, //only used for debug
        elements: _ref.elements, 
        createToken: _ref.createToken, 
        createSource: _ref.createSource, 
        retrieveSource: _ref.retrieveSource, 
        paymentRequest: _ref.paymentRequest, 
      });

      this.set('didConfigure', true);
    }
  }
});
