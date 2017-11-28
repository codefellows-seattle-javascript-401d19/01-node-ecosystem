'use strict';

const arithmetic = require('../lib/arithmetic');

describe('Helper functions should return a boolean.', () => {
  test('areNums(array) should return true if all elements in the array are numbers', () => {
    expect(arithmetic.areNums([1, 2, 3])).toBeTruthy();
  });
});