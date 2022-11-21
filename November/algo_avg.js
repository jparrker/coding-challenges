let average = function (array) {
  return array.reduce((acc, c) => (acc + c)) / array.length
  
}

console.log(average([1, 3, 5, 7, 9]));
// -> 5
console.log(average([2, 4, 6, 8, 10]));
// -> 6