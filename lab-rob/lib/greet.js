'use strict';

const greet = module.exports = {};

greet.greet = name => {
  return name && typeof name === 'string' ? `hello ${name}` : null;
};