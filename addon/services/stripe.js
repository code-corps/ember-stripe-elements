/* global Stripe */
import Ember from 'ember';

const {
  get,
  Service,
  setProperties
} = Ember;

export default Service.extend({
  init() {
    const config = get(this, 'config');
    let { elements, createToken } = new Stripe(config.stripe.publishableKey);
    setProperties(this, { elements, createToken });
  }
});
