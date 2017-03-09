import Ember from 'ember';
// import config from '../../config/environment';

const {
  setProperties
} = Ember;

export default Ember.Service.extend({
  init() {
    let { elements, createToken } = Stripe('pk_test_uulykWQvn6axvKzslwN8lqby');
    setProperties(this, { elements, createToken });
  }
});
