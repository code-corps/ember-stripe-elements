import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  classNames: ['ember-stripe-element'],

  autofocus: false,
  error: null,
  options: [],
  stripeElement: null,
  type: null, // Set in components that extend from `stripe-element`

  stripev3: service(),
  elements: computed(function() {
    return get(this, 'stripev3.elements')();
  }),

  didInsertElement() {
    this._super(...arguments);

    let elements = get(this, 'stripev3.elements')();

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

  didRender() {
    this._super(...arguments);
    // Fetch autofocus, set by user
    let autofocus = get(this, 'autofocus');
    let stripeElement = get(this, 'stripeElement');
    if (autofocus) {
      this.$('iframe')[0].onload = () => {
        stripeElement.focus();
      };
    }
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
    stripeElement.on('blur',    (event) => this.sendAction('blur', stripeElement, event));
    stripeElement.on('focus',   (event) => this.sendAction('focus', stripeElement, event));
    stripeElement.on('change',  (...args) => {
      let { error, complete } = args[0];
      set(this, 'error', error);
      this.sendAction('change', stripeElement, ...args);

      if (complete) {
        this.sendAction('complete', stripeElement);
      } else if (error) {
        this.sendAction('error', error);
      }
    });
  }
});
