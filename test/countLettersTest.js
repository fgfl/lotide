/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const {countLetters} = require('../internal');

// TEST CODE
describe("#countLetters()", () => {
  it("should return 1, 2, 1, 4, 2, 2, 2, 3, 1 for the letters l, i, g, h, t, o, u, s, e, n wth input 'Lighthouse in the house", () => {
    const input = 'Lighthouse in the house';
    const result = countLetters(input);

    assert.equal(result['l'], 1);
    assert.equal(result['i'], 2);
    assert.equal(result['g'], 1);
    assert.equal(result['h'], 4);
    assert.equal(result['t'], 2);
    assert.equal(result['o'], 2);
    assert.equal(result['u'], 2);
    assert.equal(result['s'], 2);
    assert.equal(result['e'], 3);
    assert.equal(result['n'], 1);
  });
  it("should return a blank object when an empty string is passed in", () => {
    const empty = '';
    const result2 = countLetters(empty);
    assert.deepEqual(result2, {});
  })
  it("should return {1: 1, 2: 1, 3: 1, 4: 2, 5: 6} when 12345555554 is passed in", () => {
    const numString = '12345555554';
    const result3 = countLetters(numString);
    assert.equal(result3['1'], 1);
    assert.equal(result3['2'], 1);
    assert.equal(result3['3'], 1);
    assert.equal(result3['4'], 2);
    assert.equal(result3['5'], 6);
  });
});