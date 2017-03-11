import StripeElement from './stripe-element';
import layout from '../templates/components/stripe-card';

export default StripeElement.extend({
  layout,

  classNames: ['ember-stripe-card'],

  type: 'card'
});
