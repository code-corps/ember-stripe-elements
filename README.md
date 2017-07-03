<p align="center">
  <img src="https://github.com/code-corps/ember-stripe-elements/raw/master/docs/img/ember-stripe-elements.png" />
  <br />
  <img src="https://github.com/code-corps/ember-stripe-elements/raw/master/docs/img/demo.gif" />
</p>

---

[![Build Status](https://travis-ci.org/code-corps/ember-stripe-elements.svg?branch=master)](https://travis-ci.org/code-corps/ember-stripe-elements)
[![npm version](https://badge.fury.io/js/ember-stripe-elements.svg)](https://badge.fury.io/js/ember-stripe-elements)
[![Ember Observer Score](https://emberobserver.com/badges/ember-stripe-elements.svg)](https://emberobserver.com/addons/ember-stripe-elements)
[![Coverage Status](https://coveralls.io/repos/github/code-corps/ember-stripe-elements/badge.svg?branch=master)](https://coveralls.io/github/code-corps/ember-stripe-elements?branch=master)
[![Inline docs](http://inch-ci.org/github/code-corps/ember-stripe-elements.svg?branch=master)](http://inch-ci.org/github/code-corps/ember-stripe-elements)
[![MIT License](https://img.shields.io/npm/l/ember-stripe-elements.svg)](https://github.com/code-corps/ember-stripe-elements/blob/master/LICENSE.md)

<h1>ember-stripe-elements</h1>

A simple Ember wrapper for [Stripe Elements](https://stripe.com/docs/elements).

## Features

- Inject `<script src="https://js.stripe.com/v3/"></script>` into your application's `<head>` tag
- Initialize `Stripe` with your publishable key
- Inject a `stripev3` service into your controllers so you can use:
  - [`stripe.createToken(element[, options])`](https://stripe.com/docs/elements/reference#stripe-create-token)
  - [`stripe.createSource(element[, options])`](https://stripe.com/docs/elements/reference#stripe-create-source)
  - [`stripe.retrieveSource(source)`](https://stripe.com/docs/elements/reference#stripe-retrieve-source)
  - [`stripe.elements([options])`](https://stripe.com/docs/elements/reference#stripe-elements), if for some reason you need to
- Simple, configurable Ember components like `{{stripe-card}}` (demoed in the gif above)

## Installation

```sh
$ ember install ember-stripe-elements
```

## Configuration

### Stripe Publishable Key

You must set your [publishable key](https://support.stripe.com/questions/where-do-i-find-my-api-keys) in `config/environment.js`.

```js
ENV.stripe = {
  publishableKey: 'pk_thisIsATestKey'
};
```

## Components

### Basics

Every component will:

- Accept the same array of [`options`](https://stripe.com/docs/elements/reference#element-options) accepted by Stripe Elements
- Call `update` on the Stripe `element` if the `options` are updated
- Bubble the proper JavaScript events into actions
- Mount Stripe's own `StripeElement` in a `<div role="mount-point">` on `didInsertElement`
- Unmount on `willDestroyElement`
- Provide access to the `stripev3` service
- Have the base CSS class name `.ember-stripe-element`
- Have a CSS class for the specific element that matches the component's name, e.g. `{{ember-stripe-card}}` has the class `.ember-stripe-card`
- Yield to a block
- Accept `autofocus=true` passed directly in the component, e.g. `{{stripe-card autofocus=true}}`

> Every component extends from a `StripeElement` base component which is not exposed to your application.

### Actions

The components bubble up all of [the JavaScript events that can be handled by the Stripe Element in `element.on()`](https://stripe.com/docs/elements/reference#element-on) from the Ember component using the following actions:

- `blur`
- `change` (also sets/unsets the `error` property on the component, which can be yielded with the block)
- `focus`

You could handle these actions yourself, for example:

```hbs
{{stripe-card blur="onBlur"}}
```

### Component types

This addon gives you components that match the different [Element types](https://stripe.com/docs/elements/reference#element-types):

- `{{stripe-card}}` - `card` (recommended) A flexible single-line input that collects all necessary card details.
- `{{stripe-card-number}}` - `cardNumber` The card number.
- `{{stripe-card-expiry}}` - `cardExpiry` The card's expiration date.
- `{{stripe-card-cvc}}` - `cardCvc` The card's CVC number.
- `{{stripe-postal-code}}` - `postalCode` the ZIP/postal code.

### Block usage with `options`

In addition to the simple usage above, like `{{stripe-card}}`, you can also yield to a block, which will yield both an `error` object and [the `stripeElement` itself](https://stripe.com/docs/elements/reference#the-element).

For example, you can choose to render out the `error`, as below (runnable in our dummy app).

```hbs
{{#stripe-card options=options as |stripeElement error|}}
  {{#if error}}
    <p class="error">{{error.message}}</p>
  {{/if}}
  <button {{action "submit" stripeElement}}>Submit</button>
  {{#if token}}
    <p>Your token: <code>{{token.id}}</code></p>
  {{/if}}
{{/stripe-card}}
```

Also notice the `submit` action which passes the `stripeElement`; you could define this in your controller like so:

```js
import Ember from 'ember';
const { Controller, get, inject: { service }, set } = Ember;

export default Controller.extend({
  stripev3: service(),

  options: {
    hidePostalCode: true,
    style: {
      base: {
        color: '#333'
      }
    }
  },

  token: null,

  actions: {
    submit(stripeElement) {
      let stripe = get(this, 'stripev3');
      stripe.createToken(stripeElement).then(({token}) => {
        set(this, 'token', token);
      });
    }
  }
});
```

Note the naming convention `stripeElement` instead of `element`, as this could conflict with usage of `element` in an Ember component.

### Styling

Note that you can use CSS to style some aspects of the components, but keep in mind that [the `styles` object of the `options` takes precedence](https://stripe.com/docs/elements/reference#element-options).

## Contributing

Fork this repo, make a new branch, and send a pull request. Please add tests in order to have your change merged.

### Installation

```sh
git clone git@github.com:code-corps/ember-stripe-elements.git
cd ember-stripe-elements
npm install
```

### Running

```sh
ember serve
```

Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

```sh
ember test
```

#### Testing autofill in browsers

There are self-signed certs in `/ssl` that will allow you to test autofill inside of the dummy app (or serve as a blueprint for doing this yourself in your own app).

To run using the self-signed certificate, you must:

- Add `127.0.0.1 localhost.ssl` to your `hosts` file
- Run the app with `ember serve --ssl`
- Add the certificate to your keychain and trust it for SSL
- Visit the app at [https://localhost.ssl:4200](https://localhost.ssl:4200).

### Building

```sh
ember build
```

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Contributors

Thanks to @begedin, @snewcomer, @filipecrosk, and @Kilowhisky for your early help on this!
