import Ember from 'ember';

const {
  get,
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  stripe: service(),

  model() {
    const stripe = get(this, 'stripe');
    const elements = stripe.elements();
    let card = elements.create('card');
    console.log(card);
  }
});
