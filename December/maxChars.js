// Given a string of chars, return the char that appears the most often
// No string or array methods
//any spaces? What about ties? special chars?

function maxCharacter(str) {
  let charMap = {}
  let count = 0
  let maxChar = null

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  
  }
  for(let char in charMap) {
    if(charMap[char] > count) {
      count = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

console.log(maxCharacter("Hello World"), "l")
console.log(maxCharacter('Big Pizzza'), "z")

//O(n) we have 2 O(n) loops reduces down to O(n)