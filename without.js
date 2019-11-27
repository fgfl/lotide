/*Nov 26, 2019
  Frederick Lee

  Implement without which will return a subset of a given array, removing unwanted elements.

  This function should take in a source array and a itemsToRemove array.
  It should return a new array with only those elements from source that are not present in the itemsToRemove array.
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

// returns an array with elements in source that are not in itemsToRemove
const without = function(source, itemsToRemove) {
  let filteredArray = [];

  source.forEach(elm => {
    if (!itemsToRemove.includes(elm)) {
      filteredArray.push(elm);
    }
  })
  return filteredArray;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 1, "5"], [1]), ["5"]);
assertArraysEqual(without([1, 6, 6, "5"], [1]), [6, 6, "5"]);
assertArraysEqual(without([1, 1, "5"], []), [1, 1, "5"]);