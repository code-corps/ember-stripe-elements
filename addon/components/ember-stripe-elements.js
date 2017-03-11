import Ember from 'ember';
import layout from '../templates/components/ember-stripe-elements';

const {
  get,
  inject: { service },
  set
} = Ember;

export default Ember.Component.extend({
  layout,

  events: ['blur', 'change', 'focus'],
  options: [],
  stripeElement: null,

  stripe: service(),

  didInsertElement() {
    this._super(...arguments);

    let elements = get(this, 'stripe.elements')();

    // Fetch user options
    let options = get(this, 'options');

    // `stripeElement` instead of `element` to distinguish from `this.element`
    let stripeElement = elements.create('card', options);

    // Mount the Stripe Element onto the mount point
    stripeElement.mount(this.element.querySelector('[role="mount-point"]'));

    // Make the element available to the component
    set(this, 'stripeElement', stripeElement);

    // Set the event listeners
    this.setEventListeners();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    get(this, 'stripeElement').update(get(this, 'options'));
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, 'stripeElement').unmount();
  },

  setEventListeners() {
    let stripeElement = get(this, 'stripeElement');
    get(this, 'events').forEach(eventName => {
      stripeElement.on(eventName, (...args) => {
        this.sendAction(eventName, ...args);
      });
    });
  }
});
