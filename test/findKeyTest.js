/*Dec 2, 2019
  Frederick Lee
*/
const chai = require('chai');
const assert = chai.assert;

const {findKey} = require('../internal');

describe("#findKey()", () => {
  it("should return noma when we search for hotels with 2 stars", () => {
    const hotels = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    // found case
    assert.equal(findKey(hotels, x => x.stars === 2),  "noma");
  })
  it("should return undefined when we search for hotels with more than 4 stars", () => {
    // TEST CASES
    const hotels = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    // not found case
    assert.equal(findKey(hotels, x => x.stars > 4),  undefined);
  })
});