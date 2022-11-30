// Loop through each letter. See if vowel is missing
// list all vowels -> loop through each vowel -> see if the vowel is in the string
function missingVowel(str) {
    let vowels = 'aeiou'
    for(let i=0; i < vowels.length; i++) {
        if(str.indexOf(vowels[i]) === -1){
            return i
        }
    }
  return console.log('No missing vowels')
}

console.log(missingVowel('eiou'), '0')
console.log(missingVowel("John Doe hs seven red pples under his bsket"), '0')
console.log(missingVowel("aeiou"))