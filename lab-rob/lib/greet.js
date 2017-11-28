'use strict';

module.exports.greet = name => {
  return name && typeof name === 'string' ? `hello ${name}` : null;
};