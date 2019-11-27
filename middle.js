/*Nov 26, 2019
  Frederick Lee

  Implement middle which will take in an array and return the middle-most
  element(s) of the given array.

  The middle function should return an array with only the middle element(s) of the provided array.
  This means that the length of the returned elements could vary.

  - For arrays with one or two elements, there is no middle. Return an empty array.
  - For arrays with odd number of elements, an array containing a single middle element should be returned.
  - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
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


const middle = function(array) {
  let middleArray = [];
  const indexMiddle = Math.floor((array.length - 1) / 2);

  if (array.length <= 2) {
    return middleArray;
  }

  middleArray.push(array[indexMiddle]);
  // if even need to add the second number
  if (array.length % 2 === 0) {
    middleArray.push(array[indexMiddle + 1]);
  }
  return middleArray;
};

// TEST CASES
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 'test', 3]), ['test']);
