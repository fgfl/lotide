/*Nov 25, 2019
  Frederick Lee
*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr;
  let expectedStr;
  let isEqual;

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
    isEqual = true;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
    isEqual = false;
  }
  console.log(assertMsg);
  return isEqual;
};


// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Bootcamp', 'Bootcamp');
assertEqual(1, 2);
assertEqual('1', 1);