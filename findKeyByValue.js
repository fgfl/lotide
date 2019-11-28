/*Nov 27, 2019
  Frederick Lee

  Implement the function findKeyByValue which takes in an object and a value.
  It should scan the object and return the first key which contains the given value.
  If no key with that given value is found, then it should return undefined.
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


// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
// obj: object to search
// val: value to search for
// return: first key found that contains val. undefined if not found;
const findKeyByValue = function(obj, val) {
  let returnKey = '';
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const index = values.indexOf(val);

  if (index !== -1) {
    returnKey = keys[index];
  }
  return returnKey ? returnKey : undefined;
};

// TEST CASES
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const emptyObj = {};
assertEqual(findKeyByValue(emptyObj, 'anything'), undefined);

const numOjb = {
  one: 1,
  two: 2,
  three: 45
};
assertEqual(findKeyByValue(numOjb, 1), 'one');