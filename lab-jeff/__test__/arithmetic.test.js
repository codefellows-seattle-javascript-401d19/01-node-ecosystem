'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('arithmetic.add(a, b) should return the sum of a and b', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });


  });
});
