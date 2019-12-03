/*Nov 26, 2019
  Frederick Lee

  Implement without which will return a subset of a given array, removing unwanted elements.

  This function should take in a source array and a itemsToRemove array.
  It should return a new array with only those elements from source that are not present in the itemsToRemove array.
*/

// returns an array with elements in source that are not in itemsToRemove
const without = function(source, itemsToRemove) {
  let filteredArray = [];

  source.forEach(elm => {
    if (!itemsToRemove.includes(elm)) {
      filteredArray.push(elm);
    }
  });
  return filteredArray;
};

module.exports = without;