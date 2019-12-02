/*Nov 26, 2019
  Frederick Lee
*/

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr = `${JSON.stringify(actual)}`;
  let expectedStr = `${JSON.stringify(expected)}`;
  let isEqual;

  if (eqArrays(actual, expected)) {
    assertMsg = `✔️ ✔️ ✔️ Assertion Passed: ${actualStr} === ${expectedStr}`;
    isEqual = true;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
    isEqual = false;
  }
  // console.log(assertMsg);
  return isEqual;
};

module.exports = assertArraysEqual;
