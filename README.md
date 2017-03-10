# ember-stripe-elements

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-stripe-elements`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Testing autofill in browsers

We've added some self-signed certs in `/ssl` that will allow you to test autofill inside of the dummy app (or serve as a blueprint for doing this yourself in your own app).

To run using the self-signed certificate, you must:

- Add `127.0.0.1 localhost.ssl` to your `hosts` file
- Run the app with `ember serve --ssl`
- Add the certificate to your keychain and trust it for SSL
- Visit the app at [https://localhost.ssl:4200](https://localhost.ssl:4200).
