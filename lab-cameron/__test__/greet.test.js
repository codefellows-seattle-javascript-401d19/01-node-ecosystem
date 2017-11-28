'use strict';
const greet = require('../lib/greet').greet;

describe('greet.js', () => {
  test('greet.js should return "Hello, world!"', () => {
    expect(greet('world')).toBe('Hello, world!');
  });
});
