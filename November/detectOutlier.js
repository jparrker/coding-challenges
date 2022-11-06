
// Your function will be given an array of numbers. The set of numbers will either be all even numbers with one odd number, or all odd numbers with one even number.

// Your function needs to find this outlier number and return it.

// I.e.

// [1, 3, 4, 7, 9, 11]: outlier is 4, return 4.
// [2, 4, 6, 10, 11, 14]: outlier is 11, return 11.



var detectOutlierValue = function (arr) {
const isEven = n => n % 2 === 0
const isOdd = n => n % 2 > 0

const evenArr = arr.filter(isEven)
const oddArr = arr.filter(isOdd)

return evenArr.length < oddArr.length? evenArr[0] : oddArr[0]
}


console.log(detectOutlierValue([1, 3, 4, 7, 9, 11]));
// -> 4
console.log(detectOutlierValue([2, 4, 6, 10, 11, 14]));
// -> 11