/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil()", () => {
  it("should work on number. Stop when we hit a negative number.", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("should work on strings. Stop when hit a comma", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  it("should return the whole array when callback never returns true", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    // callback never returns true case
    const results3 = takeUntil(data1, x => x > 10);
    assert.deepEqual(results3, data1);
  })
  it("should return an empty array when callback returns true on the first element", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    // stop on first element. Empty return
    const results4 = takeUntil(data1, x => x === 1);
    assert.deepEqual(results4, []);
  })
});


