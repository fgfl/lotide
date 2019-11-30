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

// returns true if both object1 and object2 are equal
const eqObjects = function(object1, object2) {
  let isEqual = true;
  const obj1KeyVals = Object.entries(object1);
  const obj2KeyVals = Object.entries(object2);

  // lengths differ. Must not be the same.
  if (obj1KeyVals.length !== obj2KeyVals.length) {
    return false;
  }

  for (const [obj1Key, obj1Value] of obj1KeyVals) {
    if (Array.isArray(obj1Value) && Array.isArray(object2[obj1Key])) {
      // check only if both are arrays. If both are not arrays, then last else if will catch
      isEqual = eqArrays(obj1Value, object2[obj1Key])
    } else if (isNonNullObject(obj1Value) && isNonNullObject(object2[obj1Key])) {
      //if both are objects other than arrays, then check if they are equal
      isEqual = eqObjects(obj1Value, object2[obj1Key]);
    } else {
      isEqual = (obj1Value === object2[obj1Key]) ;
    }

    if (!isEqual) {
      break;
    }
  }
  return isEqual;
};

// checks if two arrays are the same.
// return: true if same. false otherwise
const eqArrays = function(actualArray, expectedArray) {
  let isEqual = true;

  if (actualArray.length !== expectedArray.length) {
    isEqual = false;
  } else {
    for ([i, item] of actualArray.entries()) {
      if (Array.isArray(item) && Array.isArray(expectedArray[i])) {
        isEqual = eqArrays(item, expectedArray[i]);
      // DO NOT CHECK FOR OBJECT RIGHT NOW. LET IT FAIL
      } else if (isNonNullObject(item) && isNonNullObject(expectedArray[i])) {
        isEqual = eqObjects(item, expectedArray[i]);
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
console.log('== eqArray TESTS ==');
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

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
