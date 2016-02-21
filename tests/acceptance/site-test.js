import { headlines, sites, snapshots } from '../helpers/routes';
import moduleForAcceptance from 'front-pages/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | site', {
  beforeEach() {
    this.server = new Pretender(function() {
      this.get(headlines().url, headlines().handler);
      this.get(sites().url, sites().handler);
      this.get(snapshots().url, snapshots().handler);
    });
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it has an image for each snapshot', function(assert) {
  visit('/site/site-1');

  andThen(function() {
    assert.equal(find('.site-snapshot-image img:eq(0)').attr('src'), '1.jpg');
    assert.equal(find('.site-snapshot-image img:eq(1)').attr('src'), '2.jpg');
  });
});

test('a snapshot links to that snapshot route', function(assert) {
  visit('/site/site-1');

  andThen(function() {
    click('.site-snapshot-image img:eq(0)');
  });

  andThen(function() {
    assert.equal(currentURL(), '/site/site-1/1/headlines');
  });
});

test('a maximum of 50 snapshots are shown', function(assert) {
  var snapshotsHandler = snapshots(),
      mockJSON = { snapshots: [] };

  for (var id = 1; id <= 100; id++) {
    mockJSON.snapshots.push({ id: id, site_id: 1, file_path: `${id}.jpg` });
  }

  snapshotsHandler.mockJSON = mockJSON;
  this.server.get(snapshotsHandler.url, snapshotsHandler.handler);

  visit('/site/site-1');

  andThen(function() {
    assert.equal(find('.site-snapshot').length, 50);
  });
});
