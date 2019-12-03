/*Nov 26, 2019
  Frederick Lee

*/
// const {eqObjects, isNonNullObject} = require('./eqObjects');
// console.log(eqObjects, isNonNullObject);

// checks if two arrays are the same.
// return: true if same. false otherwise
const eqArrays = function(array1, array2) {
  let isEqual = true;

  if (array1.length !== array2.length) {
    isEqual = false;
  } else {
    for ([i, item] of array1.entries()) {
      if (Array.isArray(item) && Array.isArray(array2[i])) {
        isEqual = eqArrays(item, array2[i]);
      // } else if (isNonNullObject(item) && isNonNullObject(expectedArray[i])) {
      //   console.log('insdie objec t check');
      //   isEqual = eqObjects(item, expectedArray[i]);
      } else {
        isEqual = item === array2[i];
      }
      
      if (!isEqual) {
        break;
      }
    }
  }
  return isEqual;
};

module.exports = eqArrays;

