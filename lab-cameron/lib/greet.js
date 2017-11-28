const greet = name => {
  if (typeof name !== 'string') {
    return null;
  }
  return `Hello, ${name}!`;
};

module.exports = { greet };
