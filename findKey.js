/*Nov 28, 2019
  Frederick Lee

  Implement the function findKey which takes in an object and a callback.
  It should scan the object and return the first key for which the callback returns a truthy value.
  If no key is found, then it should return undefined.
*/

// takes in an object and a callback.
// obj: object to search
// stopSearch: callback function to determine when to stop. Stop if true.
// return: first key found
const findKey = function(obj, stopSearch) {
  let retKey;

  for (const key in obj) {
    if (stopSearch(obj[key])) {
      retKey = key;
      break;
    }
  }
  return retKey;
};

module.exports = findKey;
