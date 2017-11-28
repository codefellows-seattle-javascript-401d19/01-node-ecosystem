'use strict';

const arithmetic = module.exports = {};

arithmetic.areNums = arry => {
  for(let i = 0; i < arry.length; i++)
    if(typeof arry[i] !== 'number') return false;
  return arry.length > 0 ? true : false;
};

arithmetic.add = function (num1, num2) {
  return arithmetic.areNums(arguments) ? num1 + num2 : null;
};

arithmetic.sub = function (num1, num2) {
  return arithmetic.areNums(arguments) ? num1 - num2 : null;
};