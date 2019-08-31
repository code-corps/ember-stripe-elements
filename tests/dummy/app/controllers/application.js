import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

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
  stripev3: service(),

  token: null,
  cardOptions: null,
  options: null,

  init() {
    this._super(...arguments);
    set(this, 'cardOptions', { hidePostalCode: true, style });
    set(this, 'options', { style });
  },

  actions: {
    submit(stripeElement) {
      let stripe = get(this, 'stripev3');
      stripe.createToken(stripeElement).then(({token}) => {
        set(this, 'token', token);
      });
    }
  }
});
