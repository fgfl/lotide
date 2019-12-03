/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const findKeyByValue = require('../findKeyByValue');

// TEST CASES
describe("#findKeyByValue()", () => {
  it("should return drama when we search for 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined when we search for 'That '70s Show'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("should return undefined when passing an empyt object", () => {
    const emptyObj = {};
    assert.equal(findKeyByValue(emptyObj, 'anything'), undefined);
  });
  it("should return 'one' when looking for number 1", () => {
    const numOjb = {
      one: 1,
      two: 2,
      three: 45
    };
    assert.equal(findKeyByValue(numOjb, 1), 'one');
  });
});