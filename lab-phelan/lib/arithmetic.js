'use strict';

const Arith = module.exports = {};

Arith.add = (a, b) => {
  return (typeof a === 'number' && typeof b === 'number') ? a + b : null;
};

Arith.sub = (a, b) => {
  return (typeof a === 'number' && typeof b === 'number') ? a - b : null;
};

module.exports = Arith;
