'use strict';

const Greet = module.exports = {};

Greet.greet = (name) => {
  if(name === '' || typeof name !== 'string'){
    return null;
  }
  return `Hello ${name}`;
};
