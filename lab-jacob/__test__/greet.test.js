'use strict';

const greet = require(../lib/greet);

describe('greet.js test', () => {
  test('should return hello ${name}', () => {
    expect(greet.hello('name').toEqual('hello name'))
  })


});