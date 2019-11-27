/*Nov 25, 2019
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

// Returns the tail of an array. Checks if array is defined and a valid array
const tail = function(array) {
  return array && Array.isArray(array) ? array.slice(1) : undefined;
};

const assertArrayEqual = function(actualArray, expectedArray) {
  let isEqual = true;
  const passString = `✔️ ✔️ ✔️ Assertion Passed: [${actualArray}] === [${expectedArray}]`;
  const failString = `❌️❌️❌️Assertion Failed: [${actualArray}] === [${expectedArray}]`;

  if (actualArray.length !== expectedArray.length) {
    isEqual = false;
  } else if (actualArray.length === 0) {
    // loop won't run for empty array b/c length is 0, so we have a special case for empty arrrays
  } else {
    console.log(`Checking elements of array [${actualArray}]`);
    for (let i = 0; i < actualArray.length; ++i) {
      if (!assertEqual(actualArray[i], expectedArray[i])) {
        isEqual = false;
        break;
      }
    }
  }
  console.log(isEqual ? passString : failString);
  return isEqual;
};

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const wordsTail = ['Lighthouse', 'Labs'];
tail(words); // no need to capture the reutnr value since we are not checking it
assertEqual(words.length, 3); // orginal array should still have 3 elements!

assertArrayEqual(tail(words), wordsTail);

const wordsTailWithExtra = ['Lighthouse', 'Labs', 'more', 'than', 'that'];
const wordsTailWithLess = ['Lighthouse'];
assertArrayEqual(tail(words), wordsTailWithExtra); // fail because our expected array has more elements
assertArrayEqual(tail(words), wordsTailWithLess);

assertArrayEqual(tail(words), ['not', 'the', 'same', 'array']);

// undefined if not calling on array
assertEqual(tail(), undefined);
assertEqual(tail(1), undefined);

// both empty array and array of one element should return an empty array
assertArrayEqual(tail([]), []);
assertArrayEqual(tail([1]), []);
assertArrayEqual(tail([]), ['something']);
assertArrayEqual(tail([1]), ['something']);

const numbers = [1, 2, 3, 4, 5];
assertArrayEqual(tail(numbers), [2, 3, 4, 5]);
assertArrayEqual(tail(numbers), [2, 3, 4]);
assertArrayEqual(tail(numbers), [2, 3, 4, 5, 6]);
assertArrayEqual(tail(numbers), [2, 1, 4, 5]);