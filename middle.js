/*Nov 26, 2019
  Frederick Lee

  Implement middle which will take in an array and return the middle-most
  element(s) of the given array.

  The middle function should return an array with only the middle element(s) of the provided array.
  This means that the length of the returned elements could vary.

  - For arrays with one or two elements, there is no middle. Return an empty array.
  - For arrays with odd number of elements, an array containing a single middle element should be returned.
  - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];
  const indexMiddle = Math.floor((array.length - 1) / 2);

  if (array.length <= 2) {
    return middleArray;
  }

  middleArray.push(array[indexMiddle]);
  // if even need to add the second number
  if (array.length % 2 === 0) {
    middleArray.push(array[indexMiddle + 1]);
  }
  return middleArray;
};

module.exports = middle;