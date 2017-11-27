'use strict';

const arithmetic = require(`../lib/arithmetic`);

describe(`test the arithmetic functions`, () => {
  describe(`the arithmetic.add function should return the sum of the arguments provided`, () => {
    test(`the arithmetic.add function should return the sum of the arguments provided`, () => {
      expect(arithmetic.add(2,7)).toBe(9);
    })
    test(`the arithmetic.add function should return null if one or more of the arguments provided is not a number`, () => {
      expect(arithmetic.add(`pie`, 2)).toBe(`null`);
    })
  })
});
