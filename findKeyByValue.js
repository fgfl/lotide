/*Nov 27, 2019
  Frederick Lee

  Implement the function findKeyByValue which takes in an object and a value.
  It should scan the object and return the first key which contains the given value.
  If no key with that given value is found, then it should return undefined.
*/

// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
// obj: object to search
// val: value to search for
// return: first key found that contains val. undefined if not found;
const findKeyByValue = function(obj, val) {
  let returnKey = '';
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const index = values.indexOf(val);

  if (index !== -1) {
    returnKey = keys[index];
  }
  return returnKey ? returnKey : undefined;
};

module.exports = findKeyByValue;