'use strict';

const greet = require('../lib/greet.js');

// Required Tests
describe('Testing the greet functionality', () => {
  test('greet() should return null', () => {
    let result = greet();
    expect(result).toEqual(null);
  });

  test('greet() should return "hello World"', () => {
    let result = greet('World');
    expect(result).toEqual('hello World');
  });

  // Extra Tests
  test('greet() should return "hello Anthony"', () => {
    let result = greet('Anthony');
    expect(result).toEqual('hello Anthony');
  });

  test('greet() should return null', () => {
    let result = greet(123);
    expect(result).toEqual(null);
  });
});
