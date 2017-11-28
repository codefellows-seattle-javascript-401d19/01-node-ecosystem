'use strict';

const greet = require('../lib/greet.js')

describe('greet.test.js', () => {
    describe('greet.hi', () => {
        
        test('greet.hi should return "hello world" if no errors are present', () => {
            expect(greet.hi).toEqual('Hello world');
    });

        test('return null when user supplies non string values', () => {
            expect(greet.hi).toBeNull('');
        });
    });
})