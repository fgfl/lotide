/*Nov 28, 2019
  Frederick Lee

  Implement the function findKey which takes in an object and a callback.
  It should scan the object and return the first key for which the callback returns a truthy value.
  If no key is found, then it should return undefined.
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

// takes in an object and a callback.
// obj: object to search
// stopSearch: callback function to determine when to stop. Stop if true.
// return: first key found
const findKey = function(obj, stopSearch) {
  let retKey;

  for (const key in obj) {
    if (stopSearch(obj[key])) {
      retKey = key;
      break;
    }
  }
  return retKey;
};

// TEST CASES
const hotels = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// found case
assertEqual(findKey(hotels, x => x.stars === 2),  "noma");

// not found case
assertEqual(findKey(hotels, x => x.stars > 4),  undefined);
