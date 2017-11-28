const arith = require(`../lib/arithmetic`);

test('Testing arithmetic > add function [positive case].', () => {
  expect(arith.add(1847, 948372)).toBe(950219);
});

test('Testing arithmetic > add function [failure case].', () => {
  expect(arith.add(1847, 'wrong')).toBe(null);
});

test('Testing arithmetic > sub function [positive case].', () => {
  expect(arith.sub(724593, 6092)).toBe(718501);
});

test('Testing arithmetic > sub function [failure case].', () => {
  expect(arith.sub(1847, 'wrong')).toBe(null);
});
