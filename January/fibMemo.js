function fib(num) {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}

// memo saves you from resolving same problems.
// when you see a tree branching out like this, think quadratic/exponential. Gets out of hand quickly.
// We are solving subproblems that we already solved.
//
const memo = {};
function fibMemo(n) {
  if (n <= 1) {
    return n;
  } else if (memo[n]) {
    console.log(memo);
    return memo[n];
  } else {
    let result = fibMemo(n - 2) + fibMemo(n - 1);

    memo[n] = result;
    return result;
  }
}
console.log(fibMemo(20));
