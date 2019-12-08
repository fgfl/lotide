/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const {map} = require('../internal');

describe("#map()", () => {
  it("should return the first letter of each word", () => {
    const words = ["ground", "control", "to", "major", "tom", '', 1];
    const result1 = map(words, word => word[0]);
    assert.deepEqual(result1, ['g', 'c', 't', 'm', 't', undefined, undefined]);
  });
  it("should return the square of each number", () => {
    const numbers = [1, 2, 4, 5, 7, 10];
    const result2 = map(numbers, n => n * n);
    assert.deepEqual(result2, [1, 4, 16, 25, 49, 100]);
  });
  it("should return half the input numbers if we pass the function in by variable", () => {
    const numbers = [1, 2, 4, 5, 7, 10];
    const result3 = map(numbers, function(n) {
      return n / 2;
    });
    assert.deepEqual(result3, [0.5, 1, 2, 2.5, 3.5, 5]);
  });
  it("should return the length of the words if we pass the function in by variable", () => {
    const words = ["ground", "control", "to", "major", "tom", '', 1];
    const findLength = function(word) {
      return word.length;
    };
    const result4 = map(words, findLength);
    assert.deepEqual(result4, [6, 7, 2, 5, 3, 0, undefined]);
  });
});



