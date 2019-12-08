/*Dec 2, 2019
  Frederick Lee
*/

const {head} = require('../internal');

const assert = require('chai').assert;

describe('#head()', () => {
  it('should return 5 for [5, 6, 7]', () => {
    assert.equal(head([5, 6, 7]), 5);
  });
  it('should return "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.equal(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //string test
  });
  it('should not return "Goodbye" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye"); //string invalid test
  });
  it('should return "test" for single element ["test"]', () => {
    assert.equal(head(['test']), 'test'); //single element test
  });
  it('should not return 2 for [1, 2, 3, 4]', () => {
    assert.notEqual(head([1, 2, 3, 4]), 2); //number invalid test
  });
  it('should not return [1] for [1, 2, 3, 4]', () => {
    assert.notStrictEqual(head([1, 2, 3, 4]), [1]); // array test
  });
  it('should not return [2] for [1, 2, 3, 4]', () => {
    assert.notEqual(head([1, 2, 3, 4]), [2]); //array with wrong number
  })
  it('should not return 1 for []', () => {
    assert.notEqual(head([]), 1); //head of empty array test
  });
  it('should not return [] for []' , () => {
    assert.notEqual(head([]), []); //compare to empty array test
  });
  it('should undefined for []', () => {
    assert.equal(head([]), undefined); //empty array === undefined test
  });
});