'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.test.js', () => {

  describe('testing arithmetic.add function for non number input', () => {

    test('is one invalid input, \'\', and a number returned null', () => {
      expect(arithmetic.add('', 3)).toBeNull();
    });

  });

  describe('testing arithmetic.add function for legit input', () => {

    test('is good input returned properly', () => {
      expect(arithmetic.add(2, 3)).toBe(5);
    });

  });

  describe('testing arithmetic.sub function for non number input', () => {

    test('is one invalid input, \'\', and a number returned null', () => {
      expect(arithmetic.sub('', 3)).toBeNull();
    });

  });

  describe('testing arithmetic.sub function for legit input', () => {

    test('is good input returned properly', () => {
      expect(arithmetic.sub(7, 3)).toBe(4);
    });

  });

});
