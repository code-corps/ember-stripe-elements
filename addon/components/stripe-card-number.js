import StripeElement from './stripe-element';
import layout from '../templates/components/stripe-card-number';

export default StripeElement.extend({
  layout,

  classNames: ['ember-stripe-card-number'],

  type: 'cardNumber'
});
