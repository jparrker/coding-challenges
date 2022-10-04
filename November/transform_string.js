// DESCRIPTION:
// Given a string, return a new string that has transformed based on the input:
//  • Change case of every character, ie. lower case to upper case, upper case to lower case.
//  • Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// always str input
// always normal input
// no special chars
// can be spaces.
// return:str words rev, and each letter is opposite case
// each word is seperated via a space. 
// may have multiple spaces
// split " " reverse -> join
// split str "" -> map
// l !== l.upperCase() ? l.lower : l.upperCase()

function transformString(str){
    let reversedStr = str.split(" ").reverse().join(" ") 
    let transform = reversedStr.split("").map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join("")
    return transform
  }
  
  
  console.log(transformString("Example Input"), "iNPUT eXAMPLE")
  
  console.log(transformString("Leon Noel"), "nOEL lEON")