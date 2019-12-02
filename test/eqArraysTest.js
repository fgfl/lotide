/*Dec 2, 2019
  Frederick Lee
*/

const assertEqual = require('../assertEqual');
const eqArraysFile = require('../eqArrays');
const eqArrays = eqArraysFile.eqArrays;

// TEST CASES
console.log('== eqArray TESTS ==');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays(['e'], []), false);

assertEqual(eqArrays([1, [1]], [1, [1]]), true);
assertEqual(eqArrays([1, [1, [2, '3']]], [1, [1, [2, '3']]]), true);
assertEqual(eqArrays([1, [1, {a: 2, b: '3'}]], [1, [1, {a: 2, b: '3'}]]), true); // fails because we can handle objects

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);