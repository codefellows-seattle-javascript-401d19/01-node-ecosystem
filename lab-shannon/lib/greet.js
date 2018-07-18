'use strict';

const Greet = module.exports = {};

Greet.hello = function(name) {
  if (typeof name !== `string`){
    return null;
  }

  return `hello ${name}`
}
