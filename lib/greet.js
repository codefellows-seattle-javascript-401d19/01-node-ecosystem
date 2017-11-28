'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
    if (name === '' || typeof name !== 'string')
        return "null";
    return `hello ${name}`;
};