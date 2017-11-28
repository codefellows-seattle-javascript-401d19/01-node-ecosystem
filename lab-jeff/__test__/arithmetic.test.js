'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {
    test('arithmetic.add(a, b) should return the sum of a and b', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
      expect(arithmetic.add(5, 10)).toEqual(15);
    });
    test('if either parameter is not a number, arithmetic.add() should return null', () => {
      expect(arithmetic.add('hi', 1)).toEqual(null);
      expect(arithmetic.add(2, true)).toEqual(null);
    });

  });
  describe('arithmetic.sub', () => {
    test('arithmetic.sub(a, b) should return a minus b', () => {
      expect(arithmetic.sub(1, 2)).toEqual(-1);
      expect(arithmetic.sub(10, 5)).toEqual(5);
    });
    test('if either parameter is not a number, arithmetic.sub() returns null', () => {
      expect(arithmetic.sub('hi', 1)).toEqual(null);
      expect(arithmetic.sub(2, true)).toEqual(null);
    });

  });
});
