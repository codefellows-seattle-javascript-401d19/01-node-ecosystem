
'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.js', () => {
  describe('arithmetic.sum', () => {
    test('arithmetic.sum should return the sum of the parameters', () => {
      expect(arithmetic.sum(2, 4)).toEqual(6);
      expect(arithmetic.sum(3, 7)).toEqual(10);
    });

    test('arithmetic.sum should return null if any input is NaN', () => {
      expect(arithmetic.sum('', '')).toEqual(null);
      expect(arithmetic.sum(3, 'pineapple')).toEqual(null);
    });

  });

  describe('arithmetic.sub', () => {
    test('arithmetic.sub should return the difference of the parameters', () => {
      expect(arithmetic.sub(6, 4)).toEqual(2);
      expect(arithmetic.sub(17, 7)).toEqual(10);
    });

    test('arithmetic.sub should return null if any input is NaN', () => {
      expect(arithmetic.sub('', '')).toEqual(null);
      expect(arithmetic.sub(3, 'pineapple')).toEqual(null);
    });

  });
});
