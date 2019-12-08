/*Dec 2, 2019
  Frederick Le
*/
const chai = require('chai');
const assert = chai.assert;

const {countOnly} = require('../internal');

// TEST CODE
describe('#countOnly()', () => {
  it("should return {Jason: 1, Fang: 2} when Jason and Fang are true", () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ];

    const result1 = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true});

    assert.equal(result1['Jason'], 1);
    assert.equal(result1['Karima'], undefined);
    assert.equal(result1['Fang'], 2);
  });
  it("should should return an empty object when an empyt array is passed in", () => {
    const empty = [];
    const result2 = countOnly(empty, {'test': true, 'other': false, '': true});
    assert.equal(result2['test'], undefined);
    assert.equal(result2['other'], undefined);
    assert.equal(result2[''], undefined);
  })
});