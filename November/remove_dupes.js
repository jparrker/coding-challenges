/ You will be given an array of strings and your task is to remove all consecutive 
// duplicate letters from each string in the array 

// For example:
//     ["abracadabra", "allottee", "assesee"] => ["abracadabra", "alote", "asese"]

// You will be given an array of strings and your task is to remove all consecutive 
// duplicate letters from each string in the array 

// For example:
//     ["abracadabra", "allottee", "assesee"] => ["abracadabra", "alote", "asese"]

//map -> word -> split -> filter -> join


function removeDupes(arr) {
    return arr.map(word => word.split("").filter((l, i, a) => l != a[i-1]).join("")) 
}
 
console.log(removeDupes(["abracadabra", "allottee", "assesee"]), '["abracadabra", "alote", "asese"]')

//loop version

function dup(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(removeDuplicate(arr[i]));
  }
  return result;
};

function removeDuplicate(str) {
  let word = '';
  for (let i = 0; i < str.length ; i++) {    
    if (str[i - 1] !== str[i]) {
      word += str[i];
    }
  };
  return word;
};