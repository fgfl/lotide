
/*Nov 26, 2019
  Frederick Lee

  reate a function flatten which will take in an array of arrays and return a "flattened" version of the array. 
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


const flatten = function(array) {
  let flatArray = [];
  
  array.forEach((elm, index) => {
    if (Array.isArray(elm)) {
      elm.forEach(innerElm => {
        flatArray.push(innerElm);
      });
    } else {
      flatArray.push(elm);
    }
  });

  return flatArray;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten(['one', 'two', ['three', 4, 6, 7]]), ['one', 'two', 'three', 4, 6, 7]);
