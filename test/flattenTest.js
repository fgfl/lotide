/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const flatten = require('../flatten');

describe("#flatten()", () => {
  it("should return [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [] from []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("should return ['one', 'two', 'three', 4, 6, 7] from ['one', 'two', ['three', 4, 6, 7]]", () => {
    assert.deepEqual(flatten(['one', 'two', ['three', 4, 6, 7]]), ['one', 'two', 'three', 4, 6, 7]);
  });
});