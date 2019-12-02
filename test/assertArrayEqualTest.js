/*Dec 2, 2019
  Frederick Lee
*/

const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual(['1', 2, 3], [1, 2, 3]);