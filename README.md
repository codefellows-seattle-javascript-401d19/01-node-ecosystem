![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab class 01: Node Ecosystem
===

#### greet Module
NodeJS module `greet` located in the lib/ directory(`lib/greet.js`) and it exports a single function - `greet.hi`.
* The `greet.hi` function has a single parameter (arity of one) that should expect a string as it's input
* The `greet.hi` function returns the input name, concatenated with "hello ": eg. ("hello world")
* The `greet.hi` function returns `null` if the input is not a string.

#### arithmetic Module
NodeJS module `arithmetic` located in the lib/ directory (`lib/arithmetic.js`) and it exports an object. This module has `add` and `sub` methods that implement addition and subtraction.  
* The `add` method takes two parameters;
  * If either parameter is a non-number the function returns `null`
  * Else return the sum of the 2 numbers
* The `sub` method also takes two parameters;
  * If either parameter is a non-number the function returns `null`
  * Else it return the second parameter subtracted from the first parameter.

## Used Resources  
* [Jest Getting Started](https://facebook.github.io/jest/docs/en/getting-started.html)
* [Jest Globals](https://facebook.github.io/jest/docs/en/api.html#content)
* [Jest Expect](https://facebook.github.io/jest/docs/en/expect.html#content)
