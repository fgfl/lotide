/*Dec 3, 2019
  Frederick Lee

  internal file used to sort out the circular dependency between eqArray and eqObject. 
  solution found on medium.com (https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de)
*/


const {eqArrays} = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
// must load eqObejects before eqArray. ?? doesn't seem to work. refactoring eqArray instead
const {eqObjects} = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

debugger
console.log('in internal.js: eqArrays', eqArrays);
// console.log('in internal.js: eqObjects', eqObjects);
// console.log('in internal.js: asserArraysEqual = ', assertArraysEqual);

module.exports = {
  assertArraysEqual,
  assertEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  head,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without,
};
console.log(module.exports);