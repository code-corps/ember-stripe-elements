import Component from '@ember/component';
import layout from '../templates/components/stripe-elements';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
  stripe: service('stripev3'),
  tagName: '',
  layout,

  init() {
    this._super(...arguments);
    let options = get(this, 'options') || {};
    let elements = get(this, 'stripe').elements(options);
    set(this, 'elements', elements);
  }
});
