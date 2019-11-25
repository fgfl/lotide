/*Nov 25, 2019
  Frederick LEe
*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  const actualStr = typeof actual === 'string' ? '"' + actual + '"' : actual;
  const expectedStr = typeof expected === 'string' ? '"' + expected + '"' : expected;


  if (actual === expected) {
    assertMsg = '✔️ ✔️ ✔️ Assertion Passed: ' + actualStr + ' === ' + expectedStr;
  } else {
    assertMsg = '❌️❌️❌️Assertion Failed: ' + actualStr + ' === ' + expectedStr;
  }
  console.log(assertMsg);
};


// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Bootcamp', 'Bootcamp');
assertEqual(1, 2);
assertEqual('1', 1);