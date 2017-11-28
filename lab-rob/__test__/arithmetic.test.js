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

describe('add(num1, num2) method should take in two numbers and return their sum.', () => {
  test('add(num1, num2) should return the sum of two numbers.', () => {
    expect(arithmetic.add(1, 9)).toBe(10);
    expect(arithmetic.add(-9, 5.5)).toBe(-3.5);
  });

  test('add(num1, num2) should return null if either parameter is not a number.', () => {
    expect(arithmetic.add(1, 'a')).toBeNull();
  });
});