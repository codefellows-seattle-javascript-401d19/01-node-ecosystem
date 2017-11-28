'use strict';

const Greet = module.exports = {};

Greet.hi = (name) => {
    if(name === '' || typeof name !=='string')
    return null;

    return `Hello, ${name}!`;
}

Greet.bye = (name) => {
    if(name === '' || typeof name !== 'string')
      return null;
  
    return `Goodbye, ${name}!`;
  };
  