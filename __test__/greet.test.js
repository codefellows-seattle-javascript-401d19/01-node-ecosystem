'use strict';

describe('testing hello world function', () => {
    describe('greet.hi', () => {
        
        test('greet.hi should return "hello world" if no errors are present', () => {
            expect(greet.hi).toEqual('Hello world');
    });

        test('return null when user supplies non string values', () => {
            expect(greet.hi).toBeNull('');
        });
    });
})