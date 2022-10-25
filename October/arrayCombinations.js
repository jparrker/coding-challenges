// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
//  uniques: 2 * 1 * 2 => 4
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

// Always will get an array with nums
// Arr mult each uni sub array
// returning a num which is uniq num of combinions
// unique combos multiply number in each subArr
// set -> uniq vals
// map [1,2], [4] , [5,6] -> 2, 1, 2
//reduce -> 2*1*2

function solve(arr) {
  return arr.map(sa => new Set(sa).size).reduce((a, c) => a * c, 1)
};

// const solveIt = arr => arr.reduce((a,c) => a * new Set(c).size, 1)



  
console.log(solve([[1,2],[4],[5,6]]),'4')
console.log(solve([[1,2],[3,4],[5,6]]),'8')
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),'72')