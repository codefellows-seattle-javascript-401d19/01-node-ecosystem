'use strict';

const Greet = module.exports = {};

Greet.hi = (name) => {
  if (typeof name !== 'string') return null;
  return `hello ${name}`;
};
