/*Nov 27, 2019
  Frederick Lee
*/

// Returns the number of letters in the input string
const countLetters = function(str) {
  const output = {};

  str = str.toLowerCase().split(' ').join('');
  for (const char of str) {
    output[char] = output[char] ? output[char] + 1 : 1;
  }
  return output;
};

module.exports = countLetters;
