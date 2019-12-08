/*Dec 2, 2019
  Frederick Lee
*/

const chai = require('chai');
const assert = chai.assert;

const {tail} = require('../internal');

// Test Case: Check the original array
describe('#tail()', () => {
  it('should not change the original array', () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const wordsTail = ['Lighthouse', 'Labs'];
    tail(words); // no need to capture the reutnr value since we are not checking it
    assert.equal(words.length, 3); // orginal array should still have 3 elements!
  })
  it(`should return ['Lighthouse', 'Labs'] from ['Yo Yo', 'Lighthouse', 'Labs']`, () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const wordsTail = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), wordsTail);
  })
  it(`should fail. ['Lighthouse', 'Labs', 'more', 'than', 'that'] != ['Yo Yo', 'Lighthouse', 'Labs']`, () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const wordsTailWithExtra = ['Lighthouse', 'Labs', 'more', 'than', 'that'];
    assert.notDeepEqual(tail(words), wordsTailWithExtra);// fail because our expected array has more elements
  });
  it(`should fail. ['Lighthouse'] != ['Yo Yo', 'Lighthouse', 'Labs']`, () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const wordsTailWithLess = ['Lighthouse'];
    assert.notDeepEqual(tail(words), wordsTailWithLess); 
  });
  it('should not change the original array', () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    assert.notDeepEqual(tail(words), ['not', 'the', 'same', 'array']); 
  });
  it('should return undefined if nothing is passed in', () => {
    assert.isUndefined(tail());
  });
  it('should return undefined for is passed variable is not an array', () => {
    assert.isUndefined(tail(1));
  });
  it('should return [] if [] is passed in', () => {
    assert.deepEqual(tail([]), []);
  });
  it('should not return ["something"] when [] is passed it', () => {
    assert.notDeepEqual(tail([]), ['something']);
  });
  it('should not return ["something"] when [1] is passed it', () => {
    assert.notDeepEqual(tail([1]), ['something']);
  });
  it('should return [2, 3, 4, 5] from [1, 2, 3, 4, 5]', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(tail(numbers), [2, 3, 4, 5]);
  })
  it('should not return [2, 3, 4] from [1, 2, 3, 4, 5]', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.notDeepEqual(tail(numbers), [2, 3, 4]);
  })
  it('should not return [2, 3, 4, 5, 6] from [1, 2, 3, 4, 5]', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.notDeepEqual(tail(numbers), [2, 3, 4, 5, 6]);
  })
  it('should not return [2, 1, 4, 5] from [1, 2, 3, 4, 5]', () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.notDeepEqual(tail(numbers), [2, 1, 4, 5]);
  })
});