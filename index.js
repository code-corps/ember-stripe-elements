/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-stripe-elements',

  contentFor(type) {
   if (type === 'head') {
    return '<script type="text/javascript" src="https://js.stripe.com/v3/"></script>';
    }
  }
};
