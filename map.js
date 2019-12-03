/*Nov 28, 2019
  Frederick Lee

Function Definition

Our map function will take in two arguments:

    An array to map
    A callback function

The map function will return a new array based on the results of the callback function.
*/

// The map function will return a new array based on the results of the callback function.
// array: aray to operate on
// callback: callback function
// return: new array that has been updated with the callback function
const map = function(array, callback) {
  const result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;






