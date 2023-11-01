/* 1. Rewrite problem
Have the function isPalindrome return a true or false
if the string reads the same way forwards as it does backwards
true being yes it does, false being no it doesn't.
*/

function reverse(word){

  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const revWord = reversedWordArray.join("")

  return revWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const revWord = reverse(word)
  if (word === revWord) {
  return true
  } else {
    return false
  }

}

/* 
  Add your pseudocode here
  Create function that reverses a string and returns the string backwards
  if the returned string that is reversed == the original string
  return true,

  else
  return false.
*/

/*
 The solution to the problem is to create an array of words so you can split it easily,
 reverse the array and join the array back so the letters of the string are reversed, then 
 it's tested true or false for being equal with the original string being tested in the 
 console log below.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
