import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  classNames: ['ember-stripe-element'],

  autofocus: false,
  options: null,
  stripeElement: null,
  stripeError: null,
  type: null, // Set in components that extend from `stripe-element`

  stripev3: service(),

  elements: computed({
    get() {
      return get(this, 'stripev3.elements')();
    },

    set(key, value) {
      return value;
    }
  }),

  didInsertElement() {
    this._super(...arguments);

    // Fetch user options
    let options = get(this, 'options') || {};

    // Fetch `type` set by child component
    let type = get(this, 'type');

    // `stripeElement` instead of `element` to distinguish from `this.element`
    let stripeElement = get(this, 'elements').create(type, options);

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
    let iframe = this.element.querySelector('iframe')
    if (autofocus && iframe) {
      iframe.onload = () => {
        stripeElement.focus();
      };
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    let options = get(this, 'options') || {};
    get(this, 'stripeElement').update(options);
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, 'stripeElement').unmount();
  },

  setEventListeners() {
    let stripeElement = get(this, 'stripeElement');

    stripeElement.on('ready', (event) => {
      this._invokeAction('ready', stripeElement, event)
    });

    stripeElement.on('blur', (event) => {
      this._invokeAction('blur', stripeElement, event)
    });

    stripeElement.on('focus', (event) => {
      this._invokeAction('focus', stripeElement, event)
    });

    stripeElement.on('change', (...args) => {
      if (this.isDestroying || this.isDestroyed) {
        return;
      }

      let [{ complete, error: stripeError }] = args;
      this.change(stripeElement, ...args);

      if (complete) {
        this._invokeAction('complete', stripeElement)
      } else if (stripeError) {
        this._invokeAction('error', stripeError)
      }

      set(this, 'stripeError', stripeError);
    });
  },

  _invokeAction(method, ...args) {
    if (this.isDestroying || this.isDestroyed) {
      return;
    }

    if (typeof this[method] === 'function') {
      this[method](...args)
    }
  },

  ready() { },
  blur() { },
  focus() { },
  change() { },
  complete() { },
  error() { }
});
