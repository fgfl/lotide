/*Nov 26, 2019
  Frederick Lee


*/
// const {eqObjects, isNonNullObject} = require('./eqObjects');

const {eqObjects} = require('./eqObjects');
console.log('in eqArray:', eqObjects);

/**
 * Does a deep compare of two arrays.
 * @param {Array} array1 Frist array to compare
 * @param {Array} array2 Second array to compare
 * @returns {boolean} True if the arrays are the same. False otherwise
 * - Just call eqObjects because arrays are technically objects
 */
const eqArrays = (array1, array2) => {
  return eqObjects(array1, array2);
};

module.exports = {eqArrays};


// == OLD eqArray CODE BELOW ==

// checks if two arrays are the same.
// return: true if same. false otherwise
// const eqArrays = function(array1, array2) {
//   let isEqual = true;

//   if (array1.length !== array2.length) {
//     isEqual = false;
//   } else {
//     for ([i, item] of array1.entries()) {
//       if (Array.isArray(item) && Array.isArray(array2[i])) {
//         isEqual = eqArrays(item, array2[i]);
//       } else if (isNonNullObject(item) && isNonNullObject(array2[i])) {
//         console.log('insdie objec t check');
//         isEqual = eqObjects(item, array2[i]);
//       } else {
//         isEqual = item === array2[i];
//       }
      
//       if (!isEqual) {
//         break;
//       }
//     }
//   }
//   return isEqual;
// };
