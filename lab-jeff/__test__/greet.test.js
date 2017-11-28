'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('greet.hi(<name>) should return "Hello, <name>!"', () => {
      expect(greet.hi('world')).toEqual('hello world');
    });
    test('greet.hi should return null if input is not a string', () => {
      expect(greet.hi(true)).toEqual(null);

    });
  });
});
