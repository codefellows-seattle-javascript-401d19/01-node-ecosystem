'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js test', () => {
  test('should return values added together, if no errors are present', () => {
    expect(arithmetic.add(7, 8)).toEqual(15);
  });
  test('should return values subtracted, if no errors present', () => {
    expect(arithmetic.subtract(25, 5)).toEqual(20);
  });
  test('should in case of error output NaN', () => {
    expect(arithmetic.add('Not A Number')).toEqual(null);
  });
  test('should in case of error output NaN', () => {
    expect(arithmetic.subtract('Not A Number')).toEqual(null);
  });
});
