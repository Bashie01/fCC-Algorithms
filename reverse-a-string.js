// function reverseString(str) {
//   return str.split("").reverse().join("")
// }

/**
 * 
 * @param {This is a single loop varient} str 
 * @returns 
 */
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");