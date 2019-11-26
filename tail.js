/*Nov 25, 2019
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

const tail = function(array) {
  return array ? array.slice(1) : undefined;
};

const assertArrayEqual = function(actualArray, expectedArray) {
  if (actualArray.length !== expectedArray.length) {
    assertEqual(actualArray, expectedArray); // always fails when comparing objects
  } else {
    // loop won't run for empty array b/c length is 0
    for (let i = 0; i < actualArray.length; ++i) {
      console.log(`${actualArray[i]} ${expectedArray[i]}`);
      assertEqual(actualArray[i], expectedArray[i]);
    }
  }
};

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const wordsTail = ['Lighthouse', 'Labs'];
tail(words); // no need to capture the reutnr value since we are not checking it
assertEqual(words.length, 3); // orginal array should still have 3 elements!
assertArrayEqual(tail(words), wordsTail);

const wordsTailWithExtra = ['Lighthouse', 'Labs', 'more', 'than', 'that'];
assertArrayEqual(tail(words), wordsTailWithExtra); // fail because our expected array has more elements

// both empty array and array of one element should return an empty array
console.log(tail([]));
assertArrayEqual(tail([]), []);
assertArrayEqual(tail([1]), []);