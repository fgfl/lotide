/*Nov 25, 2019
  Frederick Lee
*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr;
  let expectedStr;
  let isEqual;

  // Enclosed the string with the appropriate wrappers "" or []
  function makeEnclosedString(string) {
    let output = ''
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
  }

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


// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Bootcamp', 'Bootcamp');
assertEqual(1, 2);
assertEqual('1', 1);