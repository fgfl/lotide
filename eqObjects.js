/*Nov 27, 2019
  Frederick Lee
*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr;
  let expectedStr;
  let isEqual;

  // Enclosed the string with the appropriate wrappers "" or []
  const makeEnclosedString = function(string) {
    let output = '';
    switch (typeof string) {
    case 'string':
      output = `"${string}"`;
      break;
    default:
      if (Array.isArray(string)) {
        output = `[${string}]`;
      } else {
        output = string;
      }
    }
    return output;
  };

  actualStr = makeEnclosedString(actual);
  expectedStr = makeEnclosedString(expected);

  if (actual === expected) {
    assertMsg = `✔️ ✔️ ✔️ Assertion Passed: ${actualStr} === ${expectedStr}`;
    isEqual = true;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
    isEqual = false;
  }
  console.log(assertMsg);
  return isEqual;
};

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

const eqObjects = function(object1, object2) {
  let isEqual = true;
  const obj1KeyVals = Object.entries(object1);
  const obj2KeyVals = Object.entries(object2);

  if (obj1KeyVals.length !== obj2KeyVals.length) {
    return false;
  } 

  for (const [obj1Key, obj1Value] of obj1KeyVals) {
    if(Array.isArray(obj1Value)) {
      if(!eqArrays(obj1Value, object2[obj1Key])) {
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

// TEST CASES
// primatives
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertEqual(eqObjects(ab, ba), true);

const abc = {a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab, abc), false);

// arrays
const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};
assertEqual(eqObjects(cd, dc), true);

const cd2 = {c: '1', d: ['2', 3, 4]};
assertEqual(eqObjects(cd, cd2), false);