'use strict';

const greet = require(`../lib/greet`);

describe(`test greet.hello function`, () => {
  test(`greet.hello should return 'hello {name}' when no errors are present`, () => {
    expect(greet.hello(`world`)).toEqual(`hello world`);
  })
  test(`if a non-string is passed as an argument to greet.hello 'null' should be returned`, () => {
    expect(greet.hello(28)).toEqual(`null`);
  })
})
