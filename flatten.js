
/*Nov 26, 2019
  Frederick Lee

  reate a function flatten which will take in an array of arrays and return a "flattened" version of the array.
*/

const flatten = function(array) {
  let flatArray = [];
  
  array.forEach(elm => {
    if (Array.isArray(elm)) {
      elm.forEach(innerElm => {
        flatArray.push(innerElm);
      });
    } else {
      flatArray.push(elm);
    }
  });

  return flatArray;
};

module.exports = flatten;
