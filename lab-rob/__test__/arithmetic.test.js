'use strict';

const arithmetic = require('../lib/arithmetic');

describe('Helper functions should return a boolean.', () => {
  test('areNums(arry) should return true if all elements in the array are numbers', () => {
    expect(arithmetic.areNums([1, 2, 3])).toBeTruthy();
  });
  test('areNums(arry) should return false if any element in the array is not a number, or if the array is empty.', () => {
    expect(arithmetic.areNums([1, 2, 'hey'])).toBeFalsy();
    expect(arithmetic.areNums([])).toBeFalsy();
  });
});