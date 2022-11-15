// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//triplets - always three numbers.
// Time complexity does not really matter here. 
// When inputs are small or constant, don't have to worry to much about time complexity.
// P - array. always three numbers.
// Positive whole numbers that are distinct. 
// index -> el in middle. 
// sort ascending. don't mutate the array. 
// we need index of original value. 
// sort a copy or sort in place -> grab index of el in middle
//sort -> grab first number
//arr -> indexOf num
// spread uses a copy.
//arr.sort() would mutate the original arr

function gimme(arr) {
  return arr.indexOf([...arr].sort((a,b) => a - b)[1])
}



console.log(gimme([2, 3, 1]), '=> 0')
console.log(gimme([5, 10, 14]), '=> 1')