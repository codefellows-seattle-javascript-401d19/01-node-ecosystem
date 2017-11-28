'use strict';

const greet = require('../lib/greet');

describe('Testing functionality for greet.js.', () => {
  test('When greet(name) is called with anything other than a string it should return null.', () => {
    expect(greet.greet(87)).toBeNull();
  });
});