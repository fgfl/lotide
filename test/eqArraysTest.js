/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArrays');

// TEST CASES
describe("#eqArrays()", () => {
  it("should be the same if the arrays match", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should be different if the numbers are reordered", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("should work with strings", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("should return false if comparing strings and numbers", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
  it("should return true with empty arrays", () => {
    assert.isTrue(eqArrays([], []));
  });
  it("should return false when comparing empty and non empty arrays", () => {
    assert.isFalse(eqArrays([], [1]));
    assert.isFalse(eqArrays(['e'], []));
  });
  it("should return true when arrays are in arrays", () => {
    assert.isTrue(eqArrays([1, [1]], [1, [1]]));
    assert.isTrue(eqArrays([1, [1, [2, '3']]], [1, [1, [2, '3']]]));
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("should return true when objects are in arrays, but doesn't work right now", () => {
    assert.isTrue(eqArrays([1, [1, {a: 2, b: '3'}]], [1, [1, {a: 2, b: '3'}]])); // fails because we can handle objects
  });
  it("should return false when the arrays don't match to numbers", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
})