

// This question is setting us up for a more complicated question next Monday!

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// - -> "alpha beta gamma delta alpha beta gamma delta"
// string -> split -> filter()
// 
function removeDupeWords(str) {
  return str.split(" ").filter((w, i, a) => w != a[i-1]).join(" ")
}

console.log(removeDupeWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta") , "alpha beta gamma delta alpha beta gamma delta")