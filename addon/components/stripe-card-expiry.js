import StripeElement from './stripe-element';
import layout from '../templates/components/stripe-card-expiry';

export default StripeElement.extend({
  layout,

  classNames: ['ember-stripe-card-expiry'],

  type: 'cardExpiry'
});
