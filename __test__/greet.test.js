'use strict';

const greet = require('../lib/greet.js');

describe('Testing greet.js for Hello, World!', () => {
  test('should return "Hello, World!"', () => {
    expect(greet.greeting('World!')).toEqual('Hello, World!');
  });
  
  test('this should return null for non string values', () => {
    expect(greet.greeting(100)).toEqual(null);
  });
});  