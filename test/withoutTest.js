/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const without = require('../without');

describe("#without()", () => {
  it("should not change the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it("should work with just numbers", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should work with a mx of numbers and strings", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should work if we just remove the numbers", () => {
    assert.deepEqual(without([1, 1, "5"], [1]), ["5"]);
  })
  it("should work if we remove just the first element", () => {
    assert.deepEqual(without([1, 6, 6, "5"], [1]), [6, 6, "5"]);
  });
  it("should not remove anything if we enter an empty array", () => {
    assert.deepEqual(without([1, 1, "5"], []), [1, 1, "5"]);
  });
});