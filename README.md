# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fgfl/lotide`

**Require it:**

`const _ = require('@fgfl/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* **`countLetters(str)`**: Returns the number of letters in string `str`. Spaces are not counted. Returns an empty object if an empty string is passed in.
* **`countOnly(allItems, itemsToCount)`**: Counts the number of times and the items in `itemsToCount` are found in `allItems`. The results are returned in an object where the keys are the elements in `itemsToCount` and the values are the counts. If the item is not found in `allItems`, the item is not added to the return object. 
* **`eqArray(array1, array2)`**: Checks if two arrays are equal. Returns true is yes and false if no.
* **`eqObjects(object1, object 2)`**: Checks if two objects are equal. Returns `true` is yes and `false` if no. 
* **`head(array)`**: Returns the first element of an array. It does not check if the array is valid.
* **`isNonNullObject(object)`**: Returns true if the obeject type is 'object' and not `null`.
* **`findKey(obj, stopSearch)`**: Find and returns the first key in obj for which the stopSearch callback function returns true. Returns `undefined` if not found.
* **`findKeyByValue(obj, val)`**: Returns the first  key in the object `obj` with the given value `val`. Returns `undefined` if value is not found.
* **`flatten(array)`**: Returns a "flattened" version of `array`.
* **`letterPositions(sentence)`**: Returns an object where the keys are the distinct letters in the string `sentence` and the values are arrays with the positions where the letters are found in `sentence`.
* **`map(array, callback)`**: Returns an new array based on the results of the callback function `callback`.
* **`middle(array)`**: Returns and array containing the middle element of an array. If `array` has an even number of elements, then the middle two elements are returned in an array.
* **`tail(array)`**: Returns an array that contains the elements of `array` less the first element. If `array` is not a valid array, then `undefined` is returned.
* **`takeUntil(array, callback)`**: `callback` is called on the elements of `array`. The first elements up until the callback function returns `false` is returned in an array.
* **`without(source, itemsToRemove)`**: Returns a subset of `source` removing any elements in `itemsToRemove`.