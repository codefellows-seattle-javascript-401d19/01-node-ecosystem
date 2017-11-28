'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic.test.js', () => {
    describe('arithmetic.add', () => {

        test('arithmetic.add should return the sum of two numbers', () => {
            expect(arithmetic.add(1, 1)).toEqual(2);
        });

        test('arithmetic.add should return null if either parameter is a non-number', () => {
            expect(arithmetic.add('')).toEqual('null');
        });
    })
})
