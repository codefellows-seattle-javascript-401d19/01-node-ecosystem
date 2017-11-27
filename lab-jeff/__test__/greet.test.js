'use strict';

const greet = require('../lib/greet');

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('greet.hi("Jeff") should return Hello, Jeff!', () => {
      expect(greet.hi('Jeff')).toEqual('Hello, Jeff!')
    })
  })
})
