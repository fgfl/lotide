/*Nov 26, 2019
  Frederick Lee
*/

const {eqArrays} = require('./eqArrays');
console.log(eqArrays)

const assertArraysEqual = function(actual, expected) {
  let actualStr = `${JSON.stringify(actual)}`;
  let expectedStr = `${JSON.stringify(expected)}`;
  let isEqual;

  debugger

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
