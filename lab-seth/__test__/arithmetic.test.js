'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {

    test('arithmetic.add should return sum of the inputs numbers if no errors are present', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
      expect(arithmetic.add('stuff')).toEqual(null);
    });
  });

  describe('arithmetic.sub', () => {

    test('arithmetic.sub should return input2 - input1 if no errors are present', () => {
      expect(arithmetic.sub(1, 2)).toEqual(1);
      expect(arithmetic.sub('stuff')).toEqual(null);
    });

  });
});
