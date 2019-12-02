/*Nov 25, 2019
  Frederick Lee
*/

const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

// Returns the tail of an array. Checks if array is defined and a valid array
const tail = function(array) {
  return array && Array.isArray(array) ? array.slice(1) : undefined;
};

module.exports = tail;