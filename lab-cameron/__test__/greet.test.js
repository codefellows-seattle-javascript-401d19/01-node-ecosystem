'use strict';

const greet = require('../lib/greet').greet;

describe('greet.js', () => {
  test('greet(<string>) should return "Hello, <string>!"', () => {
    expect(greet('world')).toBe('Hello, world!');
  });

  test('greet(<empty-string>) should return "Hello, !"', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('greet(<number>) should return null', () => {
    expect(greet(5)).toBe(null);
  });
});
