'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {

    test('arithmetic.add should return correct total if no errors are present.', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });

    test('null should return if either an empty string or non-string value is entered', () => {
      expect(arithmetic.add(NaN)).toEqual(null);
      expect(arithmetic.add('')).toEqual(null);
    });
  });

  describe('arithmetic.sub', () => {

    test('arithmetic.sub should return correct total if no errors are present.', () => {
      expect(arithmetic.sub(4, 1)).toEqual(3);
    });

    test('null should return if either an empty string or non-string value is entered', () => {
      expect(arithmetic.sub(NaN)).toEqual(null);
      expect(arithmetic.sub('')).toEqual(null);
    });
  });
});