import Ember from 'ember';

const {
  Component,
  get,
  inject: { service },
  set
} = Ember;

export default Component.extend({
  classNames: ['ember-stripe-element'],
  error: null,
  options: [],
  stripeElement: null,
  type: null, // Set in components that extend from `stripe-element`

  stripe: service(),

  didInsertElement() {
    this._super(...arguments);

    let elements = get(this, 'stripe.elements')();

    // Fetch user options
    let options = get(this, 'options');

    // Fetch `type` set by child component
    let type = get(this, 'type');

    // `stripeElement` instead of `element` to distinguish from `this.element`
    let stripeElement = elements.create(type, options);

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
    stripeElement.on('blur',    () => this.sendAction('blur'));
    stripeElement.on('focus',   () => this.sendAction('focus'));
    stripeElement.on('change',  (...args) => {
      let { error } = args[0];
      set(this, 'error', error);
      this.sendAction('change', ...args);
    });
  }
});
