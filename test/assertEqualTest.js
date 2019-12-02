/*Dec 1, 2019
  Frederick Lee
*/

const chai = require('chai')
const assert = chai.assert;

const assertEqual = require('../assertEqual');

describe('#assertEqual()', () => {
  it(`should return false for assertEqual('Lighthouse Labs', 'Bootcamp')'`, () => {
    assert.isFalse(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });
  it(`should return true for assertEqual('Bootcamp', 'Bootcamp')`, () => {
    assert.isTrue(assertEqual('Bootcamp', 'Bootcamp'));
  });
  it(`should return true for assertEqual(1, 1)`, () => {
    assert.isTrue(assertEqual(1, 1));;
  });
  it(`should return false for assertEqual(1, 2)`, () => {
    assert.isFalse(assertEqual(1, 2));
  });
  it(`should return false for assertEqual('1', 1)`, () => {
    assert.isFalse(assertEqual('1', 1));
  });
});