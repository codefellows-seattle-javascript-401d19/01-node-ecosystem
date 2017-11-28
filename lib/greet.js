'use strict';

const greet = module.exports = {};

greet.greeting = (name) => {
  if (name === '' || typeof name !== 'string')
    return null;
  return `Hello, ${name}`;
};