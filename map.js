/*Nov 28, 2019
  Frederick Lee

Function Definition

Our map function will take in two arguments:

    An array to map
    A callback function

The map function will return a new array based on the results of the callback function.
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


// The map function will return a new array based on the results of the callback function.
// array: aray to operate on
// callback: callback function
// return: new array that has been updated with the callback function
const map = function(array, callback) {
  const result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom", '', 1];
const result1 = map(words, word => word[0]);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't', undefined, undefined]);

const numbers = [1, 2, 4, 5, 7, 10];
const result2 = map(numbers, n => n * n);
assertArraysEqual(result2, [1, 4, 16, 25, 49, 100]);

const result3 = map(numbers, function(n) {
  return n / 2;
});
assertArraysEqual(result3, [0.5, 1, 2, 2.5, 3.5, 5]);

const findLength = function(word) {
  return word.length;
};
const result4 = map(words, findLength);
assertArraysEqual(result4, [6, 7, 2, 5, 3, 0, undefined]);





