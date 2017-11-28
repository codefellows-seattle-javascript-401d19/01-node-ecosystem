'use strict';

const arithmetic = require('../lib/arithmetic');


describe('arithmetic.test.js', () => {
  describe('arithmetic.sum', () => {
    test('does arithmetic.sum work properly', () => {
      expect(arithmetic.sum('nine', 'one')).toBe(null);
      expect(arithmetic.sum(9, 1)).toBe(10);
    });
  });

  describe('arithmetic.sub', () => {
    test('does arithmetic.sub work properly', () => {
      expect(arithmetic.sub(9, 1)).toBe(8);
      expect(arithmetic.sub('nine', 'one')).toBe(null);
    });
  });
});
