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
  test('If two numbers are given as arguments, add(num1, num2) should return their sum.', () => {
    expect(arithmetic.add(1, 9)).toBe(10);
    expect(arithmetic.add(-9, 5.5)).toBeCloseTo(-3.5);
  });

  test('If either argument is not a number, add(num1, num2) should return null.', () => {
    expect(arithmetic.add(1, 'a')).toBeNull();
  });
});

describe('sub(num1, num2) should take in two numbers and return the first minus the second.', () => {
  test('If either argument is not a number, sub(num1, num2) should return null.', () => {
    expect(arithmetic.sub('k', '')).toBeNull();
    expect(arithmetic.sub(5,'8')).toBeNull();
  });

  test('sub(num1, num2 should return the difference of the two numbers assuming they are both numbers.', () => {
    expect(arithmetic.sub(3, 12)).toBe(-9);
    expect(arithmetic.sub(4.7, 1.8)).toBeCloseTo(2.9);
  });
});