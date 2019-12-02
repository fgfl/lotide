/*Nov 27, 2019
  Frederick Lee
*/

const eqArrays = require('./eqArrays');

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

module.exports = {
  eqObjects: eqObjects,
  isNonNullObject: isNonNullObject
}