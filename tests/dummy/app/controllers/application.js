import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
    hidePostalCode: true,
    style: {
      base: {
        color: '#333',
        fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '14px',
        '::placeholder': {
          color: '#666'
        },
        lineHeight: '24px'
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    },
  },

  actions: {
    onBlur() {
      console.log('blurred');
    },

    onChange(...args) {
      console.log(...args);
    },

    onFocus() {
      console.log('focused');
    }
  }
});
