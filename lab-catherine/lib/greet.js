'use strict';

const Greet = module.exports = {};

Greet.hello = (name) => {
  if(name === '' || typeof name !== 'string'){
    return null;
  }
  return `Hello, ${name}`;
};
