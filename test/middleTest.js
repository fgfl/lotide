/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const {middle} = require('../internal');

// TEST CASES
describe('#middle()', () => {
  it('should return [] when array length is 1', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return [] when array length is 2', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('should return [2] when passed [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return [3] when passed [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should return middle two [2, 3] for even length array [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return middle two [3, 4] for even length array [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it('should return ["test"] from [1, "test", 3]', () => {
    assert.deepEqual(middle([1, 'test', 3]), ['test']);
  });
});