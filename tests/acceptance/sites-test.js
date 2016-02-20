import moduleForAcceptance from 'front-pages/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import { test } from 'qunit';
import { sites, snapshots } from '../helpers/routes';

moduleForAcceptance('Acceptance | sites', {
  beforeEach() {
    this.server = new Pretender(function() {
      this.get(sites().url, sites().handler);
      this.get(snapshots().url, snapshots().handler);
    });
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
