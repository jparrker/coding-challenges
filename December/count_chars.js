/* 
Count all the occurring characters in a string.
If you have a string like aba, then result should be 
{'a': 2, 'b': 1}. 
What if the string is empty? 
Then the result should be an empty object {}

*/ 

// loop through see if it exists
// if it does, val++
// if it doesn't exist, create it and set val to 1. 

function countChars(str) {
    let countObj = {}
    for(let c of str) {
      if(countObj[c]) {
         countObj[c]++
      }else {
        countObj[c] = 1
      }
    }
    return countObj
  }
  
  
  console.log(countChars('aba'), "{'a': 2, 'b': 1}." )
  console.log(countChars('dog'), "{'d': 1, 'o': 1, g: '0'}." )