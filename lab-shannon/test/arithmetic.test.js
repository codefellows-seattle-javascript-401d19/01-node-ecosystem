'use strict';

const arithmetic = require(`../lib/arithmetic`);

describe(`test the arithmetic functions`, () => {
  describe(`the arithmetic.add function should return the sum of the arguments provided if both arguments are valid numbers`, () => {
    test(`the arithmetic.add function should return the sum of the arguments provided if both arguments are valid numbers`, () => {
      expect(arithmetic.add(2,7)).toBe(9);
    })
    test(`the arithmetic.add function should return 'null' if one or more of the arguments provided is not a number`, () => {
      expect(arithmetic.add(`pie`, 2)).toBe(null);
    })
  })
  describe(`the arithmetic.sub function should return the difference between the arguments provided if both arguments are valid numbers`, () => {
    test(`the arithmetic.sub function should return the difference between the arguments provided if both arguments are valid numbers`, () => {
      expect(arithmetic.sub(9,4)).toBe(5);
    })
    test(`the arithmetic.sub function should return 'null' if one or more of the arguments provided is not a number`, () => {
      expect(arithmetic.sub(`sweet potato`, 7)).toBe(null);
    })
  })
});
