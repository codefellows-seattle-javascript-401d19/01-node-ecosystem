'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {

  test('arithmetic.add has 2 number params and returns sum', () => {
    expect(arithmetic.add(1,2)).toBe(3);
  });

  test('arithmetic.add return null is one param is not a number', () => {
    expect(arithmetic.add(12, '')).toBeNull();
    expect(arithmetic.add('', 12)).toBeNull();
    expect(arithmetic.add('Pedja', 12)).toBeNull();
    expect(arithmetic.add(12, 'Pedja')).toBeNull();
  });

});
