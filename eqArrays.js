/*Nov 26, 2019
  Frederick Lee

*/
const {assertEqual} = require('./assertEqual');

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
      } else if (isNonNullObject(item) && isNonNullObject(expectedArray[i])) {

      } else {
        isEqual = item === expectedArray[i];
      }
      
      if (!isEqual) {
        break;
      }
    }
    // loop won't run for empty array b/c length is 0
    // for (let i = 0; i < actualArray.length; ++i) {
    //   if (Array.isArray(actualArray) && Array.isArray(expectedArray)) {
        
    //   }
    //   if (actualArray[i] !== expectedArray[i]) {
    //     isEqual = false;
    //     break;
    //   }
    // }
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