# array-immutable

An extension of the JavaScript Array class that never modifies
 arrays in-place.

---

This new class is called `ArrayI` ('I' stands for "immutable"). It operates
identically to `Array`, except that all the Array prototype functions that
modify arrays in-place have been replaced with functions that modify copies
of the original array, always returning the copy.

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

Create a new array with  `new ArrayI()` — which functions identically to `new
 Array()`
````js
const myArray = new ArrayI('a', 'b', 'c');
// ArrayI ['a', 'b', 'c']
````
Create a new array with `ArrayI.from()` — identical to `Array.from()`
````js
const myArray = ArrayI.from("hello");
// ArrayI [ 'h', 'e', 'l', 'l', 'o' ]
````
Create a new array with `ArrayI.of()` - identical to `Array.of()`
````js
const myArray = ArrayI.from(['cows', 'pigs', 'goats']);
// ArrayI ['cows', 'pigs', 'goats']
````


## Functions

All of the `Array` functions are supported in `ArrayI`, with all the same
input parameters.

For all of the functions that return arrays, those arrays are of the type
 `ArrayI`.

### Functions that Output New Arrays

The following functions return new `ArrayI` arrays:

- .from()
- .of()
- .prototpye.concat()
- .prototype.copyWithin()
- .prototype.fill()
- .prototype.filter()
- .prototype.flat()
- .prototpye.flatMap()
- .prototype.pop()
- .prototype.push()
- .prototype.reverse()
- .prototype.shift()
- .prototype.slice()
- .prototype.sort()
- .prototype.splice()
- .prototype.unshift()

### Functions That Return Differently than `Array`

Some of the `Array` functions modify an array in-place, but return something
 other than the changed array.
 
 Since immutability require all functions that modify arrays to return
  array copies, the following methods return array copies instead of what
  `Array` returns:
  
- .prototype.pop() (`Array` returns removed element)
- .prototype.push() (`Array` returns new length of array)
- .prototype.shift() (`Array` returns removed element)
- .prototype.slice() (`Array` returns array of removed elements)
- .prototype.shift() (`Array` returns removed element)
- .prototype.splice() (`Array` returns array of removed elements)
- .prototype.unshift() (`Array` returns new length of array)

---

## License

MIT license.
