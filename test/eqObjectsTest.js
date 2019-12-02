/*Dec 2, 2019
  Frederick Lee
*/

const assertEqual = require('../assertEqual');
const {eqObjects} = require('../eqObjects');

// TEST CASES
console.log('== eqObjects TESTS ==');
// primatives
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertEqual(eqObjects(ab, ba), true);

const abc = {a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab, abc), false);

// arrays
const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};
assertEqual(eqObjects(cd, dc), true);

const cd2 = {c: '1', d: ['2', 3, 4]};
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects(cd, ab), false);
const cd3 = {c: '1', d: 2};
assertEqual(eqObjects(cd, cd3), false);
const cd4 = {c: 1, d: 2};
assertEqual(eqObjects(cd4, cd3), false);

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
// objects in objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects(nestedObject1, nestedObject2), false); //different key
assertEqual(eqObjects(nestedObject1, nestedObject3), true); // match
assertEqual(eqObjects(nestedObject1, nestedObject4), false); //nestedObjects4 has array instead of number value
assertEqual(eqObjects(nestedObject4, nestedObject5), true); //array in array in object match
//can't handle this right now
assertEqual(eqObjects(objInArray1, objInArray2), true); //obj in array in object