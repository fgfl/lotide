/*Nov 27, 2019
  Frederick Lee

  countOnly will be given an array and an object.
  It will return an object containing counts of everything that the input object listed.
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

// Counts the number of specified items.
// If key is not in allItems, it does not get added to the return object
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// return: new object with filtered key:values from allItems
const countOnly = function(allItems, itemsToCount) {
  // loop through itemsToCount
  // if key === true, then count keys in allItems
  // store in new object
  const returnObj = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      returnObj[item] = returnObj[item] ? returnObj[item] + 1 : 1;
    }
  }
  return returnObj;
};


// TEST CODE
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

const result1 = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);

const empty = [];
const result2 = countOnly(empty, {'test': true, 'other': false, '': true});
assertEqual(result2['test'], undefined);
assertEqual(result2['other'], undefined);
assertEqual(result2[''], undefined);
