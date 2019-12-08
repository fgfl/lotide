/*Dec 2, 2019
  Frederick Lee
*/
const chai = require('chai');
const assert = chai.assert;

const {letterPositions} = require('../internal');

describe("#letterPositions()", () => {
  it("should return the proper indices for 'lighthouse in the house'", () => {
    const sentence = 'lighthouse in the house';
    const result = letterPositions(sentence);

    assert.deepEqual(result['l'], [0]);
    assert.deepEqual(result['i'], [1, 11]);
    assert.deepEqual(result['g'], [2]);
    assert.deepEqual(result['h'], [3, 5, 15, 18]);
    assert.deepEqual(result['t'], [4, 14]);
    assert.deepEqual(result['o'], [6, 19]);
    assert.deepEqual(result['u'], [7, 20]);
    assert.deepEqual(result['s'], [8, 21]);
    assert.deepEqual(result['e'], [9, 16, 22]);
    assert.deepEqual(result['n'], [12]);
  });
  it("should return the proper inidices for 'hello'", () => {
    const ownSentence = 'hello';
    const result2 = letterPositions(ownSentence);

    assert.deepEqual(result2.h, [0]);
    assert.deepEqual(result2.e, [1]);
    assert.deepEqual(result2.l, [2, 3]);
    assert.deepEqual(result2.o, [4]);
  });
});