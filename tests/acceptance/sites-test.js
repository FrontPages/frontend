import Pretender from 'pretender';
import { test } from 'qunit';
import moduleForAcceptance from 'front-pages/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sites', {
  beforeEach() {
    this.server = new Pretender(function() {
      this.get('/sites', function() {
        var mockJSON = {
          sites: [
            { id: 1, name: 'Site 1' },
            { id: 2, name: 'Site 2' }
          ]
        };
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

test('it redirects to the first site', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/site/site-1');
  });
});

test('it has links to each site', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(find('.mdl-layout__tab-bar a:eq(0) .sites-name').text(), 'Site 1');
    assert.equal(find('.mdl-layout__tab-bar a:eq(1) .sites-name').text(), 'Site 2');
  });
});
