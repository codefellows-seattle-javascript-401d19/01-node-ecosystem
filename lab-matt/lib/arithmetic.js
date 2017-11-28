'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if (isNaN(a) || isNaN(b)) return null;
  return (a + b);
};

arithmetic.sub = (a, b) => {
  if (isNaN(a) || isNaN(b)) return null;
  return (a - b);
};
