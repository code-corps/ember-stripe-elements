<p align="center">
  <img src="/docs/img/ember-stripe-elements.png" />
  <br />
  <img src="/docs/img/demo.gif" />
</p>

---

[![Build Status](https://travis-ci.org/code-corps/ember-stripe-elements.svg?branch=develop)](https://travis-ci.org/code-corps/ember-stripe-elements)

<h1>ember-stripe-elements</h1>

A simple Ember wrapper for [Stripe Elements](https://stripe.com/docs/elements).

## Installation

```sh
$ ember install ember-stripe-elements
```

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

We've added some self-signed certs in `/ssl` that will allow you to test autofill inside of the dummy app (or serve as a blueprint for doing this yourself in your own app).

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
