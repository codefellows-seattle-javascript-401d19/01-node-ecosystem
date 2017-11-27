'use strict';

const Greet = module.exports = {};

Greet.hello = (name) => {
  if(name === '' || typeof name !== 'string')
    return null;

  return `Hello, ${name}`;

};


// The greet function should have a single parameter (arity of one) that should expect a string as it's input
// The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
// The greet function should return null if the input is not a string
