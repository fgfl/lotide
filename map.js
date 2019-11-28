/*Nov 28, 2019
  Frederick Lee

Function Definition

Our map function will take in two arguments:

    An array to map
    A callback function

The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  const result = [];

  // console.log('array: ', array);
  // console.log('callback: ', callback);
  for (const item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]);

console.log(result1);
