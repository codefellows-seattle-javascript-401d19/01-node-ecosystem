'use strict';

const Arithmetic = module.exports = {};

Arithmetic.sum = (numberOne, numberTwo) => {
  if(typeof numberOne !== 'number' || typeof numberTwo !== 'number'){
    return null;
  }
  return numberOne + numberTwo;
};

Arithmetic.sub = (numberOne, numberTwo) => {
  if(typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
    return null;
  }
  return numberOne - numberTwo;
};
