// 107 Algorithms: Flip Pairs

// For this assignment, I want you to implement the code that will flip every pair of characters in a string.

// I.e.

// "hello" becomes "ehllo"
// "world" becomes "owlrd"
// "hello world" becomes "ehll oowlrd"

const flipPairs = function (string) {
  let newString = "";
  for (let i = 0; i < string.length; i += 2) {
    if (string[i+1]) {
      newString += string[i+1];
    }
    if (string[i]) {
     
      newString += string[i];
    }
  }
  return newString;
}

console.log(flipPairs("hello world"));
// -> ehll oowlrd