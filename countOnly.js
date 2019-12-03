/*Nov 27, 2019
  Frederick Lee

  countOnly will be given an array and an object.
  It will return an object containing counts of everything that the input object listed.
*/

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

module.exports = countOnly;
