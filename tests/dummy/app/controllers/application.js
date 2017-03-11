import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service },
  set
} = Ember;

let style = {
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
  }
};

export default Controller.extend({
  stripe: service(),

  token: null,

  cardOptions: {
    hidePostalCode: true,
    style
  },

  options: {
    style
  },
  actions: {
    submit(stripeElement) {
      let stripe = get(this, 'stripe');
      stripe.createToken(stripeElement).then(({token}) => {
        set(this, 'token', token);
      });
    }
  }
});
