'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {

  test('arithmetic.add has 2 number params and returns their sum', () => {
    expect(arithmetic.add(1,2)).toBe(3);
  });

  test('arithmetic.add return null is one param is not a number', () => {
    expect(arithmetic.add(12, '')).toBeNull();
    expect(arithmetic.add('', 12)).toBeNull();
    expect(arithmetic.add('hello', 12)).toBeNull();
    expect(arithmetic.add(12, 'hello')).toBeNull();
    expect(arithmetic.add('', '')).toBeNull();
    expect(arithmetic.add('hello', 'world')).toBeNull();
  });

  test('arithmetic.sub has 2 number params and returns second param subtracted from the first one', () => {
    expect(arithmetic.sub(2,1)).toBe(1);
  });

  test('arithmetic.sub return null is one param is not a number', () => {
    expect(arithmetic.sub(12, '')).toBeNull();
    expect(arithmetic.sub('', 12)).toBeNull();
    expect(arithmetic.sub('Pedja', 12)).toBeNull();
    expect(arithmetic.sub(12, 'Pedja')).toBeNull();
    expect(arithmetic.sub('', '')).toBeNull();
    expect(arithmetic.sub('hello', 'world')).toBeNull();
  });

});
