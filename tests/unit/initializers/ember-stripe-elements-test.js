/* global Stripe */
import Application from '@ember/application';

import { run } from '@ember/runloop';
import { initialize } from 'dummy/initializers/ember-stripe-elements';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';
import sinon from 'sinon';

var container, application;

module('Unit | Initializer | ember stripe elements', {
  beforeEach() {
    run(() => {
      application = Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(application);
  }
});

test('it sets stripe key', function(assert) {
  assert.expect(1);

  const StripeStub = sinon.spy(() => {
    return sinon.createStubInstance(Stripe);
  });

  initialize(container, application);

  assert.ok(StripeStub.calledWithNew);
});
