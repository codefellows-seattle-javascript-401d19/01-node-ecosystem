'use strict';

const Arithmetic = module.exports = {};

Arithmetic.add = (x, y) => {
  if ( typeof x !== 'number' || typeof y !== 'number') return null; 

  return (x + y);
};

Arithmetic.subtract = (x, y) => {
  if ( typeof x !== 'number' || typeof y !== 'number') return null; 

  return (x - y);
};