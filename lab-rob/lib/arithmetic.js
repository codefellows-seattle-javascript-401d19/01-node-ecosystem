'use strict';

const arithmetic = module.exports = {};

arithmetic.areNums = arry => {
  for(let i = 0; i < arry.length; i++)
    if(isNaN(arry[i])) return false;
  return true;
};