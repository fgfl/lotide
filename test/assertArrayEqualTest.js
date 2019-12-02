/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai. assert;
const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
describe('#assertArrayEqual()', () => {
  it('should return true for assertArraysEqual([1, 2, 3], [1, 2, 3]);', () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it('should return true assertArraysEqual([], [])', () => {
    assert.isTrue(assertArraysEqual([], []));
  })
  it(`should return false assertArraysEqual(['1', 2, 3], [1, 2, 3])`, () => {
    assertArraysEqual(['1', 2, 3], [1, 2, 3]);
  });
});