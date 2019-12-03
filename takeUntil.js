/*Nov 28, 2019
  Frederick Lee
*/

const takeUntil = function(array, callback) {
  let output = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    }
    output.push(item);
  }

  return output;
};

module.exports = takeUntil;
