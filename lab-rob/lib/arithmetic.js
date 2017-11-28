'use strict';

const arithmetic = module.exports = {};

arithmetic.areNums = arry => {
  for(let i = 0; i < arry.length; i++)
    if(typeof arry[i] !== 'number') return false;
  return arry.length > 0 ? true : false;
};