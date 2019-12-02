/*Nov 26, 2019
  Frederick Lee

*/
// const {eqObjects, isNonNullObject} = require('./eqObjects');
// console.log(eqObjects, isNonNullObject);

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
      // } else if (isNonNullObject(item) && isNonNullObject(expectedArray[i])) {
      //   console.log('insdie objec t check');
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

module.exports = eqArrays;

