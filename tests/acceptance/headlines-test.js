import { headlines, sites, snapshots } from '../helpers/routes';
import moduleForAcceptance from 'front-pages/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import { test } from 'qunit';

moduleForAcceptance('Acceptance | headlines', {
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

test('it lists all headlines for the snapshot', function(assert) {
  visit('/site/site-1/1/headlines');

  andThen(function() {
    assert.equal(find('a.headlines-headline:eq(0)').text(), 'Title');
    assert.equal(find('a.headlines-headline:eq(1)').text(), 'Title 2');
  });
});

