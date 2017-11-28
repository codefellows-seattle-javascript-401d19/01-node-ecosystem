'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (number, number2) => {
  if (number === '' || typeof number !== 'number' && number2 === '' || typeof number2 !== 'number')
    return 'null';
  return number + number2;
};

arithmetic.sub = (number, number2) => {
  if (number === '' || typeof number !== 'number' && number2 === '' || typeof number2 !== 'number')
    return 'null';
  return number - number2;
};