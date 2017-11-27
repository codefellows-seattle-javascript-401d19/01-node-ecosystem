'use strict';

const greet = require('../lib/greet.js');

describe('greet.js', () => {
  describe('greet.greet', () => {
    test('greet.greet should return hello <name>', () => {
      expect(greet.greet('Demi')).toEqual('Hello Demi');
      expect(greet.greet('Sam')).toEqual('Hello Sam');
      expect(greet.greet('World')).toEqual('Hello World');
    });

    test('greet.greet should return null if error', () => {
      expect(greet.greet('')).toEqual(null);
      expect(greet.greet(355641)).toEqual(null);
    });

  });
});
