import Ember from 'ember';
import Pretender from 'pretender';
import { test } from 'qunit';
import moduleForAcceptance from 'front-pages/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | site', {
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
        var emptyGIF = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
            mockJSON = {
              snapshots: [
                { id: 1, site_id: 1, file_path: emptyGIF },
                { id: 2, site_id: 1, file_path: emptyGIF },
                { id: 3, site_id: 2, file_path: emptyGIF },
                { id: 4, site_id: 2, file_path: emptyGIF },
              ]
            };
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

test('it puts all snapshots for the site into coverflow', function(assert) {
  visit('/site/site-1');

  andThen(function() {
    assert.ok(find('.cover:eq(0)').hasClass('site-screenshot-coverflow-initialized'));
  });
});

test('scrolling to a snapshot changes to that snapshot\'s route', function(assert) {
  var done = assert.async();

  visit('/site/site-1');
  click('.cover:eq(1)');

  andThen(function() {
    // Wait for animation.
    Ember.run.later(this, function() {
      assert.equal(currentURL(), '/site/site-1/2');
      done();
    }, 500);
  });
});
