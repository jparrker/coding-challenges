// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// see if what number divides evenly into both numbers. Start high and go low! recursive = return y == 0 ? x : mygcd(y, x % y)

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)
// Problem will always have a GCD.
// Euclidean algo

// a = b * q + r

// q is how many times b can go into a

// 30 = 12 * 2 + 6 | 30 - 24 gives us r = 6
// 12 = 6 * q + r
// 12 = 6 * 2 + 0
// 6 = 0 //done
//base case = b = 0
//return  a

//recursive step:
// % a % b

function mygcd(a, b) {
  if (b === 0) {
    return a;
  }
  return mygcd(b, a % b);
}

console.log(mygcd(30, 12));
