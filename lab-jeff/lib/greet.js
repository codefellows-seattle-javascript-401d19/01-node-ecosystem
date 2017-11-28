'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
  if (typeof name !== 'string') return null;
  return `hello ${name}`;
};
