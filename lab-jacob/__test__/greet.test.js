'use strict';

const greet = require('../lib/greet');

describe('greet.js test', () => {
  test('should return hello name, if no errors are present', () => {
    expect(greet.hello('Jacob')).toEqual('Hello Jacob');
    
  });
  test('should in case of error output null', () => {
    expect(greet.hello(134134)).toEqual(null);
  })
  

});