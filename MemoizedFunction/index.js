const factorial = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const memoized = (fn) => {
  let cache = {};
  return (...args) => {
    let argsVal = JSON.stringify(args);
    if (argsVal in cache) {
      return cache[argsVal];
    } else {
      let result = fn(...args);
      cache[argsVal] = result;
      return result;
    }
  };
};

console.log(factorial(20));
console.log(factorial(20));
const memoizedFactorial = memoized(factorial);
console.log(memoizedFactorial(20));
console.log(memoizedFactorial(20));
