# Code 401 lab 1

## Purpose
The purpose of this lab is to learn Test Driven Development (TDD) when writing code.  We are using jest.js to test our code.

## File Structure
There are two test files in the __test__ folder which test the functions included in the two modules in the lib folder.

## greet module
The greet module contains one function, greet.hi().  

### greet.hi
greet.hi() expects one string as an argument.  When invoked with a string, it returns 'hello <string>'.  When invoked with any non-string, null is returned.

## arithmetic module
The arithmetic module contains two functions, Arithmetic.add() and Arithmetic.sub().

### arithmetic.add
This function takes two arguments.  If they are numbers, it returns the sum of those numbers.  If either argument is not a number, it returns null.

### arithmetic.sub
This function takes two arguments.  If they are numbers, it returns the second parameter subtracted from the first.  If either argument is not a number, it returns null.
