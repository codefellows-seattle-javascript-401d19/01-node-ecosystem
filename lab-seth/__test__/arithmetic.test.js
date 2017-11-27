'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
  describe('arithmetic.add', () => {

    test('arithmetic.add should return sum of the inputs numbers if no errors are present', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
      expect(arithmetic.add('stuff')).toEqual(null);
    });

    // test('Hi should return null if no errors are present', () => {
    //   expect(arithmetic.greet(1234567)).toEqual(null);
    // });
  });
});
