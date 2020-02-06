# array-immutable

Immutable JavaScript
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
class.

---

The existing JavaScript [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
class has a problem.

Some of its built-in methods support modern concepts,
others don’t. Some methods leave source arrays unchanged
(immutable 👍), others change arrays in-place (mutable 👎).
Some methods are pure functions (no side effects 👍), others are un-pure
(has side effects 👎). In addition, some methods that should return an array
don’t
(can't do method chaining 👎).

**array-immutable** addresses all of these `Array` problems by creating a clas
named `ArrayI` (the letter 'I' stands for "immutable"). It's identical to
`Array`, except all the un-pure `Array`methods that modify arrays in-place
have been replaced with pure functions that don't modify the source array,
returning instead a copy (deep or shallow).

 **array-immutable** methods behave in a consistent way, eliminating
the need to remember if a given method modifies in place or not.

## Installation

```
$ npm install array-immutable
```


## Usage


Node.js:
````js
// from a node.js module
const ArrayI = require('array-immutable');
````
HTML:
````html
<!-- from a browser file -->
<script src="arrayi.js"></script>

<!-- minified version -->
<script src="arrayi.min.js"></script>
````

## Creating Arrays

Create a new array with  `new ArrayI()`
````js
// ArrayI:
const myArray = new ArrayI('a', 'b', 'c');
// ArrayI ['a', 'b', 'c']

// vs. Array:
const myArray = new Array('a', 'b', 'c');
// [ 'a', 'b', 'c' ]
````
Or with `ArrayI.from()`
````js
// ArrayI:
const myArray = ArrayI.from("hello");
// ArrayI [ 'h', 'e', 'l', 'l', 'o' ]

// vs. Array:
const myArray = Array.from("hello");
// [ 'h', 'e', 'l', 'l', 'o' ]
````
Or with `ArrayI.of()`
````js
// ArrayI:
const myArray = ArrayI.from(['cows', 'pigs', 'goats']);
// ArrayI ['cows', 'pigs', 'goats']

// vs. Array:
const myArray = ArrayI.from(['cows', 'pigs', 'goats']);
// ['cows', 'pigs', 'goats']
````
Or from an existing `Array` with `ArrayI.arrayI()`
````js
const oldArray = [1,2,3,'a'];
const newArray = ArrayI.arrayI(oldArray);
// ArrayI [1, 2, 3, 'a']
````

## Configuration

`ArrayI` defaults to deep copying of all arrays. Change this to shallow
copying with `ArrayI.deepCopy()`.

All of the `Array` methods are available in `ArrayI`, with all the same
input parameters. There are two new static functions.

## Static Functions

### `ArrayI.arrayI()`

The `arrayI()` static function creates a new `ArrayI` from an existing array.

#### Syntax
```js
ArrayI.arrayI(array);
```
#### Parameters
`array` - an array
#### Return value
A new `ArrayI` array.

---

### `ArrayI.deepCopy()`

Toggle between deep and shallow copy modes, or obtain current mode.

#### Syntax
```js
ArrayI.deepCopy([deep]);
```
#### Parameters
`deep` *[optional]* - **true** for deep copy, **false** for shallow,
**blank** to obtain current mode
#### Return value
The existing copy mode: true for deep copy, false for shallow


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

For details on all functions, see the `Array` documentation:

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

