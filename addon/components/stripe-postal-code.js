import StripeElement from './stripe-element';
import layout from '../templates/components/stripe-postal-code';

export default StripeElement.extend({
  layout,

  classNames: ['ember-stripe-postal-code'],

  type: 'postalCode'
});
