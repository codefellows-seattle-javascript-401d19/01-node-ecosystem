'use strict';

const Greet = module.exports = {};

Greet.greet = name => {
  if(typeof name !== 'string' || !name)
    return null;
  return `hello ${name}`;
};