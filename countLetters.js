/*Nov 27, 2019
  Frederick Lee
*/

const assertEqual = function(actual, expected) {
  let assertMsg = '';
  let actualStr;
  let expectedStr;
  let isEqual;

  // Enclosed the string with the appropriate wrappers "" or []
  const makeEnclosedString = function(string) {
    let output = '';
    switch (typeof string) {
    case 'string':
      output = `"${string}"`;
      break;
    default:
      if (Array.isArray(string)) {
        output = `[${string}]`;
      } else {
        output = string;
      }
    }
    return output;
  };

  actualStr = makeEnclosedString(actual);
  expectedStr = makeEnclosedString(expected);

  if (actual === expected) {
    assertMsg = `✔️ ✔️ ✔️ Assertion Passed: ${actualStr} === ${expectedStr}`;
    isEqual = true;
  } else {
    assertMsg = `❌️❌️❌️Assertion Failed: ${actualStr} === ${expectedStr}`;
    isEqual = false;
  }
  console.log(assertMsg);
  return isEqual;
};

const countLetters = function(str) {
  const output = {};

  str = str.toLowerCase().split(' ').join('');
  for (const char of str) {
    output[char] = output[char] ? output[char] + 1 : 1;
  }
  return output;
};


// TEST CODE
const input = 'Lighthouse in the house';
result = countLetters(input);

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);

const empty = '';
const result2 = countLetters(empty);
assertEqual(result2['t'], undefined);

const numString = '12345555554';
const result3 = countLetters(numString);
assertEqual(result3['1'], 1);
assertEqual(result3['2'], 1);
assertEqual(result3['3'], 1);
assertEqual(result3['4'], 2);
assertEqual(result3['5'], 6);