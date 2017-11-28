'use strict';

module.exports = name => {
  return name && typeof name === 'string' ? `hello ${name}` : null;
};