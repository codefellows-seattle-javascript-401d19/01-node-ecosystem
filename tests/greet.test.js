'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
    describe('greet.hi', () => {
  
      test('greet.hi should return “Hello, <name>!” if no errors are present', () => {
        expect(greet.hi('Dalton')).toEqual('Hello, Dalton!');
        expect(greet.hi('Carissa')).toEqual('Hello, Carissa!');
      });
  
      test('-1 should be returned in case of error', () => {
        expect(greet.hi('')).toEqual(-1);
      });
  
    });
    describe('greet.bye', () => {
  
      test('greet.bye should return “Goodbye, <name>!” if no errors are present', () => {
        expect(greet.bye('Dalton')).toEqual('Goodbye, Dalton!');
        expect(greet.bye('Carissa')).toEqual('Goodbye, Carissa!');
      });
  
      test('-1 should be returned in case of error', () => {
        expect(greet.bye('')).toEqual(-1);

      });
  
    });
  
  });