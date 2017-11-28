'use strict';

const Greet = module.exports = {};

Greet.hello = (name) => { 
  if (typeof name !== 'string') return null; 
 
  return `Hello ${name}`;
};

