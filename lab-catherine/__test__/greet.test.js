'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.null', () => {
    test('testing to return null for non string values', () => {
      expect(greet.hello(null)).toBeNull();
    });
  });

  describe('greet.helloWorld', () => {
    test('testing to see that greet module returns hello world', () => {
      expect(greet.hello('world')).toBe('Hello, world');
    });
  });
});
