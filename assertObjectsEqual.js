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

// does not handle objects inside objects right now
// returns true if both object1 and object2 are equal
const eqObjects = function(object1, object2) {
  let isEqual = true;
  const obj1KeyVals = Object.entries(object1);
  const obj2KeyVals = Object.entries(object2);

  if (obj1KeyVals.length !== obj2KeyVals.length) {
    return false;
  }

  for (const [obj1Key, obj1Value] of obj1KeyVals) {
    if (Array.isArray(obj1Value) && Array.isArray(object2[obj1Key])) {
      if (!eqArrays(obj1Value, object2[obj1Key])) {
        isEqual = false;
        break;
      }
    } else if (obj1Value !== object2[obj1Key]) {
      isEqual = false;
      break;
    }
  }

  return isEqual;
};

// checks if two objects are the same. Console.logs the pass/fail message.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let assertMsg = '';
  let actualStr = `${inspect(actual)}`;
  let expectedStr = `${inspect(expected)}`;
  let isEqual;

  if (eqObjects(actual, expected)) {
    assertMsg = `✔️ ✔️ ✔️ Assertion Passed: ${actualStr} === ${expectedStr}`;
    isEqual = true;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
    isEqual = false;
  }
  console.log(assertMsg);
  return isEqual;
};


// TEST CASES
// primatives
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertObjectsEqual(ab, ba);

const abc = {a: '1', b: '2', c: '3'};
assertObjectsEqual(ab, abc);

// arrays
const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};
assertObjectsEqual(cd, dc);

const cd2 = {c: '1', d: ['2', 3, 4]};
assertObjectsEqual(cd, cd2);

assertObjectsEqual(cd, ab);
const cd3 = {c: '1', d: 2};
assertObjectsEqual(cd, cd3);
const cd4 = {c: 1, d: 2};
assertObjectsEqual(cd4, cd3);