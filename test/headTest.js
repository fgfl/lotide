/*Dec 2, 2019
  Frederick Lee
*/

const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5); //number test
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //string test
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye"); //string invalid test
assertEqual(head(['test']), 'test'); //single element test
assertEqual(head([1, 2, 3, 4]), 2); //number invalid test
assertEqual(head([1, 2, 3, 4]), [1]); // array test
assertEqual(head([1, 2, 3, 4]), [2]); //array with wrong number
assertEqual(head([]), 1); //head of empty array test
assertEqual(head([]), []); //compare to empty array test
assertEqual(head([]), undefined); //empty array === undefined test