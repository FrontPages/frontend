import Pretender from 'pretender';
import { test } from 'qunit';
import moduleForAcceptance from 'front-pages/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sites', {
  beforeEach() {
    this.server = new Pretender(function() {
      this.get('/sites', function() {
        var mockJSON = { sites: [{ id: 1, name: 'Site Name' }] };
        return [200, {}, JSON.stringify(mockJSON)];
      });

      this.get('/snapshots', function() {
        var mockJSON = { snapshots: [] };
        return [200, {}, JSON.stringify(mockJSON)];
      });
    });

    this.server.prepareHeaders = function(headers) {
      headers['Content-Type'] = 'application/json';
      return headers;
    };
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('redirects to the first site', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/site/site-name');
  });
});
