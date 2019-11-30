/*Nov 26, 2019
  Frederick Lee

*/
const {assertEqual} = require('./assertEqual');
//const {eqObjects} = require('./eqObjects');

// checks if the variable is an non-null object or not
// returns: true if it's an non-null object
const isNonNullObject = object => {
  return (typeof object === 'object') && (object !== null);
};

// checks if two arrays are the same.
// return: true if same. false otherwise
const eqArrays = function(actualArray, expectedArray) {
  let isEqual = true;

  if (actualArray.length !== expectedArray.length) {
    isEqual = false;
  } else {
    for ([i, item] of actualArray.entries()) {
      if (Array.isArray(item)) {
        isEqual = eqArrays(item, expectedArray[i]);
      // DO NOT CHECK FOR OBJECT RIGHT NOW. LET IT FAIL
      // } else if (isNonNullObject(item) && isNonNullObject(expectedArray[i])) {
      //   isEqual = eqObjects(item, expectedArray[i]);
      } else {
        isEqual = item === expectedArray[i];
      }
      
      if (!isEqual) {
        break;
      }
    }
  }
  return isEqual;
};

exports.isNonNullObject = isNonNullObject;
exports.eqArrays = eqArrays;

// TEST CASES
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([], [1]), false);
// assertEqual(eqArrays(['e'], []), false);

assertEqual(eqArrays([1, [1]], [1, [1]]), true);
assertEqual(eqArrays([1, [1, [2, '3']]], [1, [1, [2, '3']]]), true);
assertEqual(eqArrays([1, [1, {a: 2, b: '3'}]], [1, [1, {a: 2, b: '3'}]]), true); // fails because we can handle objects