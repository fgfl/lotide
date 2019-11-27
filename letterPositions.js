/*Nov 27, 2019
  Frederick Lee
*/

// checks if two arrays are the same.
// return: true if same. false otherwise
const eqArrays = function(actualArray, expectedArray) {
  let isEqual = true;

  if (actualArray.length !== expectedArray.length) {
    isEqual = false;
  } else {
    // loop won't run for empty array b/c length is 0
    for (let i = 0; i < actualArray.length; ++i) {
      if (actualArray[i] !== expectedArray[i]) {
        isEqual = false;
        break;
      }
    }
  }
  return isEqual;
};

const assertArraysEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr = `[${actual}]`;
  let expectedStr = `[${expected}]`;
  let isEqual;

  if (eqArrays(actual, expected)) {
    assertMsg = `✔️ ✔️ ✔️ Assertion Passed: ${actualStr} === ${expectedStr}`;
    isEqual = true;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
    isEqual = false;
  }
  console.log(assertMsg);
  return isEqual;
};

// sentence: input string
// return: object with arrays for each unique char. The arrays contains the indices of the char
const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.toLowerCase();

  for (const char of sentence) {
    // console.log(`-- ${char}`);
    if (results[char]) {
      const lastElmOfChar = results[char][results[char].length -1];
      // console.log(`last elm of char: ${lastElmOfChar}`);
      // console.log(`array length: ${results[char].length}. index of next char to add: ${sentence.indexOf(char, lastElmOfChar + 1)}`);
      results[char].push(sentence.indexOf(char, lastElmOfChar + 1));
    } else {
      results[char] = [];
      results[char].push(sentence.indexOf(char));
    }
    // console.log(results[char]);
  }

  return results;
};


const sentence = 'lighthouse in the house';
const result = letterPositions(sentence);

assertArraysEqual(result['l'], [0]);
assertArraysEqual(result['i'], [1, 11]);
assertArraysEqual(result['g'], [2]);
assertArraysEqual(result['h'], [3, 5, 15, 18]);
assertArraysEqual(result['t'], [4, 14]);
assertArraysEqual(result['o'], [6, 19]);
assertArraysEqual(result['u'], [7, 20]);
assertArraysEqual(result['s'], [8, 21]);
assertArraysEqual(result['e'], [9, 16, 22]);
assertArraysEqual(result['n'], [12]);

const ownSentence = 'hello';
const result2 = letterPositions(ownSentence);

assertArraysEqual(result2.h, [0]);
assertArraysEqual(result2.e, [1]);
assertArraysEqual(result2.l, [2, 3]);
assertArraysEqual(result2.o, [4]);