/*Nov 27, 2019
  Frederick Lee
*/

// sentence: input string
// return: object with arrays for each unique char. The arrays contains the indices of the char
const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.toLowerCase();

  for (const [index, char] of sentence.split('').entries()) {
    if (char === ' ') {
      // skipping spaces
      continue;
    }
    if (!results[char]) {
      results[char] = [];
    }
    results[char].push(index);
  }

  return results;
};

module.exports = letterPositions;