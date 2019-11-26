/*Nov 25, 2019
  Frederick Lee
*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr;
  let expectedStr;

  switch (typeof actual) {
    case 'string':
      actualStr = `"${actual}"`
      break;
    default:
      if (Array.isArray(actual)) {
        actualStr = `[${actual}]`
      } else {
        actualStr = actual;
      }
  }

  switch (typeof expected) {
    case 'string':
      expectedStr = `"${expected}"`
      break;
    default:
      if (Array.isArray(expected)) {
        expectedStr = `[${expected}]`
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

//return first elelment of array. Does not check if argument is an array
const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5); //number test
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //string test
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye"); //string invalid test
assertEqual(head(['test']), 'test'); //single element test
assertEqual(head([1, 2, 3, 4]), 2); //number invalid test
assertEqual(head([1, 2, 3, 4]), [1]); // array test
assertEqual(head([1, 2, 3, 4]), [2]); //array with wrong number
assertEqual(head([]), 1); //head of empty array test
assertEqual(head([]), []); //compare to empty array test
assertEqual(head([]), undefined); //empty array === undefined test