'use strict';

const greet = require('../lib/greet');

// Write a test that expects the greet module to return null when you supply non string values
describe('greet.test.js', () => {
  describe('greet.null', () => {
    test('testing to return null for non string values', () => {
      expect(greet.hello(null)).toBeNull();
    });
  });
  // Write a test the expects the greet module to return 'hello world'
  describe('greet.helloWorld', () => {
    test('testing to see that greet module returns hello world', () => {
      expect(greet.hello('world')).toBe('Hello, world');
    });
  });


});







// This should happen when invoked with 'world' as the first argument
