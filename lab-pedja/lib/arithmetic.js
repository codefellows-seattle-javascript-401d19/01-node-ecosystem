'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (param1, param2) => {
  if(typeof param1 !== 'number' || typeof param2 !== 'number')
    return null;
  return param1 + param2;
};

arithmetic.sub = (param1, param2) => {
  if(typeof param1 !== 'number' || typeof param2 !== 'number')
    return null;
  return param1 - param2;
};
