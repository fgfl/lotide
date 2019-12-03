/*Dec 2, 2019
  Frederick Lee
*/

const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const {eqObjects, isNonNullObject} = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

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
