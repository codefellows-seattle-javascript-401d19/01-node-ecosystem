'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {

  test('greet.hi has single string param and returns "hello <name>', () => {
    expect(greet.hi('Pedja')).toEqual('hello Pedja');
  });

  test('greet.hi returns null if input is not a string', () => {
    expect(greet.hi('')).toBeNull();
    expect(greet.hi(1234)).toBeNull();
  });

});
