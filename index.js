function reverseString(word){
  const wordArray = word.split("")
  const reverseArray = wordArray.reverse()
  const reversedWord = reverseArray.join("")
    return reversedWord;
}


function isPalindrome(word) {
  const reversedWord = reverseString(word);
  if (word === reversedWord){
    return true;
  } else {
    return false;
  }
}
// Need to create an isPalindrome function to have return coming back either true or false.
// When input string is same forward and backwards, it should run true. Sames goes  if if input string is the same after it is reversed.
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
