'use strict';

const Arithmetic = module.exports = {};

Arithmetic.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a + b;
};
