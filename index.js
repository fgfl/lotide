/*Dec 2, 2019
  Frederick Lee
*/

// const internal = require('./internal');

// console.log(internal.countLetters("hasdfadf"));
// console.log(internal);
// console.log(internal.countLetters);

const {
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  head,
  isNonNullObject,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without,
} = require('./internal');

module.exports = {
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  head,
  isNonNullObject,
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
