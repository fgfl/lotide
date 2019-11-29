/*Nov 28, 2019
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

const takeUntil = function(array, callback) {
  let output = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    }
    output.push(item);
  }

  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// callback never returns true case
const results3 = takeUntil(data1, x => x > 10);
assertArraysEqual(results3, data1);

// stop on first element. Empty return
const results4 = takeUntil(data1, x => x === 1);
assertArraysEqual(results4, []);