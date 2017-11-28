'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.hello', () => {

    test('greet.hello should return \'Hello, <name>!\' if no errors are present.', () => {
      expect(greet.hello('world')).toBe('Hello, world!')
    });

    test('null should return if either an empty string or non-string value is entered', () => {
      expect(greet.hello(9)).toEqual(null);
      expect(greet.hello('')).toEqual(null);
    });
  });
});