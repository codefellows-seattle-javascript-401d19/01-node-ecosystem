'use strict';

const add = require('../lib/arithmetic').add;
const sub = require('../lib/arithmetic').sub;

describe('arithmetic.js', () => {
  describe('add(<number>, <number>)', () => {
    test('add(2,3) should return 5', () => {
      expect(add(2,3)).toBe(5);
    });

    test('add(<string>, <number>) should return null', () => {
      expect(add('string', 5)).toBe(null);
    });

    test('add("string") should return null', () => {
      expect(add('string')).toBe(null);
    });
  });

  describe('sub(<number>, <number>)', () => {
    test('sub(1,2) should return -1', () => {
      expect(sub(1,2)).toBe(-1);
    });

    test('sub("string") should return null', () => {
      expect(sub('string')).toBe(null);
    });
  });
});
