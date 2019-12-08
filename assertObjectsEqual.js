/*Nov 27, 2019
  Frederick Lee
*/

const { eqObjects } = require('./internal');

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