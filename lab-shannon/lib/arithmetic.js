'use strict';

const Arithmetic = module.exports = {};

Arithmetic.add = function(num1, num2){
  if (typeof num1 !== `number` || typeof num2 !== `number`){
    return `null`;
  }

  return num1 + num2;
}
