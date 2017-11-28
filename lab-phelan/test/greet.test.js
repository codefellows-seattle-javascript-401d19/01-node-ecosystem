const greet = require(`../lib/greet`);

test('Testing greet > sayHi function.', () => {
  expect(greet('world')).toBe('hello world');
});

test('Testing greet > sayHi function.', () => {
  expect(greet(5)).toBe(null);
});
