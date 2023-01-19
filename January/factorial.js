// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion

// base case -> what we are working towards
// if 1, 0 return 1.
// if less than 2 -> return 1

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5), 120);

// n = 5
// is 5 < 2? No.

// 5 * fact(5 - 1)
//   4 * fact( 4- 1)
//     3 * fact(3 -1)
//       2 * fact(2-1)
//         1 -> is 1 < 2? Yes. return 1.

//bubbles back up to 5* 4 * 3 * 2 * 1
// get all the way down to our base case.
// then bubble up by returning from subcalls.
//
