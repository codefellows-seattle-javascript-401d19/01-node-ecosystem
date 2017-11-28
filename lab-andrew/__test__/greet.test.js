'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {

  describe('testing greet.hello function for non string input', () => {

    test('is \'\' returned null', () => {
      expect(greet.hello('')).toBeNull();
    });

    test('is a number returned as null', () => {
      expect(greet.hello(9)).toBeNull();
    });

  });

  describe('testing greet.hello function for legit input', () => {

    test('is good input returned properly', () => {
      expect(greet.hello('world')).toBe('hello world');
    });

  });

});
