/*Dec 2, 2019
  Frederick Lee
*/

const assert = require('chai').assert;

const {eqObjects} = require('../eqObjects');

// TEST CASES
describe("#eqObjects()", () => {
  // primatives
  it("should return true if the keys are not in the same order", () => {
    const ab = {a: '1', b: '2'};
    const ba = {b: '2', a: '1'};
    assert.equal(eqObjects(ab, ba), true);
  });
  it("should return false if the objects are different", () => {
    const ab = {a: '1', b: '2'};
    const abc = {a: '1', b: '2', c: '3'};
    assert.equal(eqObjects(ab, abc), false);
  });
  // arrays
  it("Should return true with arrays in object", () => {
    const cd = {c: '1', d: ['2', 3]};
    const dc = {d: ['2', 3], c: '1'};
    assert.equal(eqObjects(cd, dc), true);
  });
  it("Should return false with arrays in object and is different", () => {
    const ab = {a: '1', b: '2'};
    const cd = {c: '1', d: ['2', 3]};
    const cd2 = {c: '1', d: ['2', 3, 4]};
    assert.equal(eqObjects(cd, cd2), false);
    assert.equal(eqObjects(cd, ab), false);
    const cd3 = {c: '1', d: 2};
    assert.equal(eqObjects(cd, cd3), false);
    const cd4 = {c: 1, d: 2};
    assert.equal(eqObjects(cd4, cd3), false);
  });
  // objects in objects
  it("should handl objects in objects", () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

  const nestedObject1 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: {
        s: 15,
        t: 16
      }
    }
  };

  const nestedObject2 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: {
        s: 15,
        different: 16
      }
    }
  };

  const nestedObject3 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: {
        s: 15,
        t: 16
      }
    }
  };

  const nestedObject4 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: [
        [1, 2, 3, 4],
        16
      ]
    },
  };

  const nestedObject5 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: [
        [1, 2, 3, 4],
        16
      ]
    },
  };

  const objInArray1 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: [
        {one: 1, two: 2},
        16
      ]
    },
  };

  const objInArray2 = {
    a: {y: 0, z: 1},
    b: {
      v: 5,
      w: [
        {one: 1, two: 2},
        16
      ]
    },
  };
  it("should return false when the keys are different", () => {
    assert.equal(eqObjects(nestedObject1, nestedObject2), false); //different key
  })
  it("should return true if nested objects match", () => {
    assert.equal(eqObjects(nestedObject1, nestedObject3), true); // match
  });
  it("should handle arrays in arrays in objects", () => {
    assert.equal(eqObjects(nestedObject1, nestedObject4), false); //nestedObjects4 has array instead of number value
    assert.equal(eqObjects(nestedObject4, nestedObject5), true); //array in array in object match
  });
  it("should handle and object in array in object, but doesn't work right now", () => {
    //can't handle this right now
    assert.equal(eqObjects(objInArray1, objInArray2), true); //obj in array in object
  });
});