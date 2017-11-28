'use strict';

//const Greet = module.exports = {};

function sayHi (name) {
  return typeof name === 'string' ? `hello ${name}` : null ;
}

module.exports = sayHi;
