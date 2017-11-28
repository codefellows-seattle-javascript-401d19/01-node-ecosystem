'use strict';

const greet = require('../lib/greet'); // either without '.js'
const arithmetic = require('../lib/arithmetic.js'); // or with '.js'

describe('Greet Module testing', () => {

  test('greet(<name>) should return "hello <name>" if no errors', () => {
    expect(greet(2)).toBe(null);
    expect(greet('foo')).toBe('hello foo');
    expect(greet('bar')).toBe('hello bar');
  });

});

describe('Arithmetic Module Testing, (addition and subtraction)', () => {

  test('arithmetic.add - returns the sum of "a + b"', () => {
    expect(arithmetic.add('three', 'four')).toBe(null);
    expect(arithmetic.add(0.2, 0.4)).toBeCloseTo(0.6, 2);
    expect(arithmetic.add(4, 8)).toBeCloseTo(12, 2);
    expect(arithmetic.add(10, 15)).toBeCloseTo(25, 2);
  });

  test('arithmetic.sub - returns the product of "a - b"', () => {
    expect(arithmetic.sub('five', 'one')).toBe(null);
    expect(arithmetic.sub(5, 0)).toBeCloseTo(5);
    expect(arithmetic.sub(5, 10)).toBeCloseTo(-5);
    expect(arithmetic.sub(23, 7)).toBeCloseTo(16);
  });

});
