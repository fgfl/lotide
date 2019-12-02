/*Dec 2, 2019
  Frederick Lee
*/

const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
const wordsTail = ['Lighthouse', 'Labs'];
tail(words); // no need to capture the reutnr value since we are not checking it
assertEqual(words.length, 3); // orginal array should still have 3 elements!

assertArraysEqual(tail(words), wordsTail);

const wordsTailWithExtra = ['Lighthouse', 'Labs', 'more', 'than', 'that'];
const wordsTailWithLess = ['Lighthouse'];
assertArraysEqual(tail(words), wordsTailWithExtra); // fail because our expected array has more elements
assertArraysEqual(tail(words), wordsTailWithLess);

assertArraysEqual(tail(words), ['not', 'the', 'same', 'array']);

// undefined if not calling on array
assertEqual(tail(), undefined);
assertEqual(tail(1), undefined);

// both empty array and array of one element should return an empty array
assertArraysEqual(tail([]), []);
assertArraysEqual(tail([1]), []);
assertArraysEqual(tail([]), ['something']);
assertArraysEqual(tail([1]), ['something']);

const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(tail(numbers), [2, 3, 4, 5]);
assertArraysEqual(tail(numbers), [2, 3, 4]);
assertArraysEqual(tail(numbers), [2, 3, 4, 5, 6]);
assertArraysEqual(tail(numbers), [2, 1, 4, 5]);