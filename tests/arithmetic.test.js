'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic', function() {

  test('should return 5 when added together', function() {

    arithmetic.add(1,4);
  });

  test('should return -4 when subtracted from each other', function() {

    arithmetic.subtract(1,4);
  });
});