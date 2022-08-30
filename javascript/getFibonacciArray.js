function getFibonacciArray (n) {
  return (n <= 1) ? ((n === 1) ? [0, 1] : [0]) : getFibonacciArray(n - 1).concat(getFibonacciArray(n - 1).slice(-2).reduce((v1, v2) => v1 + v2));
}

export default getFibonacciArray;