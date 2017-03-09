import Ember from 'ember';
import layout from '../templates/components/ember-stripe-elements';

const {
  get,
  inject: { service },
  set
} = Ember;

export default Ember.Component.extend({
  layout,

  stripe: service(),

  didInsertElement() {
    this._super(...arguments);
    let elements = get(this, 'stripe.elements')();
    let card = elements.create('card');
    card.mount(this.element);
    set(this, 'card', card);
  }
});
