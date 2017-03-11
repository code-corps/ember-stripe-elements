import StripeElement from './stripe-element';
import layout from '../templates/components/stripe-card-cvc';

export default StripeElement.extend({
  layout,

  classNames: ['ember-stripe-card-cvc'],

  type: 'cardCvc'
});
