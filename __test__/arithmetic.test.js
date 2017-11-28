'use strict';

const math = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
  describe('math.add', () => {
    test('math.add should return the sum of two numbers if there are no errors', () => {
      expect(math.add(5, 10)).toEqual(15);
      expect(math.add('foo')).toEqual(null);
    });
  });

  describe('math.subtract', () => {
    test('math.subtract should return the difference of two numbers if there are no errors', () => {
      expect(math.subtract(10, 5)).toEqual(5);
      expect(math.subtract('bar')).toEqual(null);
    });
  });
});