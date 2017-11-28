'use strict';

const greet = require('../lib/greet.js')

describe('greet.test.js', () => {
    describe('greet.hi', () => {
        
        test('greet.hi should return "hello <name>" if no errors are present', () => {
            expect(greet.hi('fred')).toEqual('hello fred');
    });

        test('greet.hi should return null when user supplies non string values', () => {
            expect(greet.hi('')).toEqual('null');
        });
    });
})