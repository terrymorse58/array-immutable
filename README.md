# array-immutable

An extension of the standard JavaScript
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
class for immutable arrays.

---

**array-immutable** creates a class named `ArrayI` ('I' stands for "immutable").
It functions identically to `Array`, except that all the
functions that modify arrays in-place have been replaced with functions that
never modify the original array, always returning a copy.

## Installation

```
npm install array-immutable --save
```


## Usage



````js
// from a module
import ArrayI from "./js/arrayi.mjs"
````

````html
<!-- from an HTML file -->
<script type="module" src="./js/arrayi.mjs"></script>
````

## Creating Arrays

Create a new array with  `new ArrayI()`
````js
// ArrayI:
const myArray = new ArrayI('a', 'b', 'c');// ArrayI ['a', 'b', 'c']

// vs. Array:
const myArray = new Array('a', 'b', 'c'); // [ 'a', 'b', 'c' ]
````
Create a new array with `ArrayI.from()`
````js
// ArrayI:
const myArray = ArrayI.from("hello"); // ArrayI [ 'h', 'e', 'l', 'l', 'o' ]

// vs. Array:
const myArray = Array.from("hello"); // [ 'h', 'e', 'l', 'l', 'o' ]
````
Create a new array with `ArrayI.of()`
````js
// ArrayI:
const myArray = ArrayI.from(['cows', 'pigs', 'goats']); // ArrayI ['cows', 'pigs', 'goats']

// vs. Array:
const myArray = ArrayI.from(['cows', 'pigs', 'goats']); // ['cows', 'pigs', 'goats']
````


## Functions

All of the `Array` functions are supported in `ArrayI`, with all the same
input parameters.

The one major difference is that `ArrayI` functions return arrays of type
`ArrayI`, instead of type `Array`.

### Functions that Return New Arrays

The following functions return new `ArrayI` arrays:

- [`.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [`.of()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
- [`.prototpye.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [`.prototype.copyWithin()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [`.prototype.fill()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`.prototype.flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`.prototpye.flatMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [`.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [`.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [`.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [`.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [`.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [`.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

### Functions That Return Differently than `Array`

Some of the existing `Array` functions modify an array in-place, but return
 something other than the changed array.
 
 Since immutability require all functions that modify arrays to return
  array *copies*, the following `ArrayI` methods return array copies instead of
   what `Array` returns:
  
- [`.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) (`Array` returns removed element)
- [`.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (`Array` returns new length of array)
- [`.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) (`Array` returns removed element)
- [`.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (`Array` returns array of removed elements)
- [`.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) (`Array` returns removed element)
- [`.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) (`Array` returns array of removed elements)
- [`.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) (`Array` returns new length of array)

---

## Reference

For complete details on all functions, see the `Array` documentation:

[MDN web docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## License

The MIT License (MIT)

Copyright (c) 2020 Terry Morse

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

