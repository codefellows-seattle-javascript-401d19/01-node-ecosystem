'use strict';

const math = module.exports = {};

math.add = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number')
    return null;
  return a + b;
};

math.subtract = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number')
    return null;
  return a - b;
};