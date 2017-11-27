'use strict';

const Arithmetic = module.exports = {};

Arithmetic.sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return null;
  }
  return a+b;
};

Arithmetic.sub = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number' ){
    return null;
  }
  return a-b;
};
