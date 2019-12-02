/*Nov 25, 2019
  Frederick Lee
*/

const assertEqual = require('./assertEqual');

//return first elelment of array. Does not check if argument is an array
const head = function(array) {
  return array[0];
};

module.exports = head;