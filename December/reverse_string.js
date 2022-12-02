/*Given a string of chars as input, write a function that returns it with the chars reversed. No Reverse method. Loop through adding curr val to previous
*/


// return s/r/j
// str.split("").reverse().join("")

// leon -> string-> loop and add each char to the string



function reverseString(str) {
    let reversed = ""
    for(let char of str) {
      reversed = char + reversed
    }
  
    return reversed
  }
  
  // O(n) solution
  
  console.log(reverseString('bob'), 'bob')
  
  console.log(reverseString('john'), 'nhoj')
  
  console.log(reverseString('sarah') ,'haras')