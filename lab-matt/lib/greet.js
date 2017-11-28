'use strict';

function greet(string) {
  if (typeof(string) !== 'string' || string === '') return null;
  return `hello ${string}`;
}

module.exports = greet;
