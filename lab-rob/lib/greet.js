'use strict';

const Greet = module.exports = {};

Greet.greet = name => {
  return name && typeof name === 'string' ? `hello ${name}` : null;
};