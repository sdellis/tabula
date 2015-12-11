'use strict';

import test from 'tape';
import Manifest from '../manifest.js';

test('manifest @type must equal sc:Manifest', function (assert) {
  assert.plan(1);

  var m = Manifest;
  m['@type'] = 'sc:Sequence'

  assert.equal(m['@type'], 'sc:Manifest', 'should generate 1');

  assert.end();
});
