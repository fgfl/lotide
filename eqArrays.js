/*Nov 26, 2019
  Frederick Lee

*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr;
  let expectedStr;

  switch (typeof actual) {
  case 'string':
    actualStr = `"${actual}"`;
    break;
  default:
    if (Array.isArray(actual)) {
      actualStr = `[${actual}]`;
    } else {
      actualStr = actual;
    }
  }

  switch (typeof expected) {
  case 'string':
    expectedStr = `"${expected}"`;
    break;
  default:
    if (Array.isArray(expected)) {
      expectedStr = `[${expected}]`;
    } else {
      expectedStr = expected;
    }
  }

  if (actual === expected) {
    assertMsg = `✔️ ✔️ ✔️ Assertion Passed: ${actualStr} === ${expectedStr}`;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
  }
  console.log(assertMsg);
};

const eqArrays = function(acutal, expected) {
  let isEqual = true;

  if (actualArray.length !== expectedArray.length) {
    isEqual = false;
  } else if (actualArray.length === 0) {
    // loop won't run for empty array b/c length is 0, so we have a special case for empty arrrays
  } else {
    for (let i = 0; i < actualArray.length; ++i) {
      if (!assertEqual(actualArray[i], expectedArray[i])) {
        isEqual = false;
        break;
      }
    }
  }
  return isEqual;
};


// TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
