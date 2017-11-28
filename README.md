![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 01: Node Ecosystem
===

## Submission Instructions
* Work in a fork of this repository.
* Work in a branch on your fork.
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`.
* Open a pull request to this repository.
* Submit on canvas a question and observation, how long you spent, and a link to your pull request.
* Features without unit tests behind them will not be graded.

## Resources  
* [Jest Getting Started](https://facebook.github.io/jest/docs/en/getting-started.html)
* [Jest Globals](https://facebook.github.io/jest/docs/en/api.html#content)
* [Jest Expect](https://facebook.github.io/jest/docs/en/expect.html#content)

## Configuration 
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **lib/** - contains module definitions
* **__test__/** - contains unit tests

## Feature Tasks
#### Greet Module
Create a NodeJS module in the lib/ directory named `greet.js` that exports a single function. 
* The `greet` function should have a single parameter (arity of one) that should expect a string as its input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

#### Arithmetic Module
Create a NodeJS module in the lib/ directory named `arithmetic.js` that exports an object. This module should have `add` and `sub` methods that implement addition and subtraction.  
* The `add` method should have an arity of two (define two parameters)
  * If either parameter is a non-number the function should return null
  * Else return the sum of the 2 numbers
* The `sub` method should have an arity of two (define two parameters)
  * If either parameter is a non-number the function should return null
  * Else return the second parameter subtracted from the first parameter

## Testing  
#### Greet Module Tests
* Write a test that expects the greet module to return `null` when you supply non string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

#### Arithmetic Module Tests
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)

## Documentation  
In your README.md describe the exported values of each module defined in your lib/ directory. Every function description should include its arity (expected number of arguments), the expected data for each argument (data-type and limitations), and its behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.
