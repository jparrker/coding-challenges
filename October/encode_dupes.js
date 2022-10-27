// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// From:
// 

// Hint: map through array checking if indexof == lastindexof and return the appropriate character
// Going to be a utf-16. No funny business with inputs
// if it does repeat make it a ) if once, then ( 
// ignore caps -> toLower()
// split -> map.  indexOf === lastIndexOff -> "(" else ")"
// join to return a string

function encodeDupes(str) {
  return str.toLowerCase().split("").map((l, i, a) =>{
    a.indexOf(l) === a.lastIndexOf(l) ? "(" : ")" 
  } ).join("")
}



console.log(encodeDupes('din'), "(((")
console.log(encodeDupes('recede'), "()()()")
console.log(encodeDupes("(( @"), "))((")


//Problem -> this is quadratic
// Multiple loops: map is looping and the indexOfs have to loop through string
// Would be terrible for large inputs
// lastIndexOf is expensive. 

//How can we make this less expensive? Hashmap
//First pass would count num of chars. The second pass would assign the char.
// We could have an object, and in the object we have the letter and it's count. 
// {r: 1, e: 2} etc. 
// This would be two O(n) pass. 
// index count['r] => 1. if Count > 1 -> ")", else "("


