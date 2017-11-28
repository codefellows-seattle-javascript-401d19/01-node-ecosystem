'use strict';

const arithmetic = require('../lib/arithmetic.js');


describe('Testing add and sub functionality with numerical and null values', () => {
  test('add() should return 2', () => {
    let result = arithmetic.add(1, 1);
    expect(result).toEqual(2);
  });

  test('add() should return null', () => {
    let result = arithmetic.add();
    expect(result).toEqual(null);
  });

  test('add() should return 2', () => {
    let result = arithmetic.sub(1, 1);
    expect(result).toEqual(0);
  });

  test('add() should return null', () => {
    let result = arithmetic.sub();
    expect(result).toEqual(null);
  });
});
