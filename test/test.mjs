import ArrayI from '../js/arrayi.mjs';

console.log('\nArrayI tests...');

console.log('\nmethods:');

// from
const hello = "hello";
const from = ArrayI.from(hello);
console.log('from:' +
  '\n    before: ', hello,
  '\n    after:  ', from);

// of
const args = [1, 2, 3];
const of = ArrayI.of(1,2,3);
console.log('of:' +
  '\n    before: ', ...args,
  '\n    after:  ', of);

console.log('\nprototypes:');

// copyWithin
const arrA = new ArrayI('a', 'b', 'c', 'd', 'e');
const arrCW = arrA.copyWithin(0, 3, 4);
console.log('copyWithin:' +
  '\n    before: ', arrA,
  '\n    after:  ', arrCW);

// fill
const arrF = new ArrayI(1, 2, 3, 4);
const arrFill = arrF.fill(0,2,4);
console.log('fill:' +
  '\n    before: ', arrF,
  '\n    after:  ', arrFill);

// filter
const words = new ArrayI('spray', 'limit', 'elite', 'exuberant',
  'destruction', 'present');
const arrFilter = words.filter(word => word.length > 6);
console.log('filter:' +
  '\n    before: ', words,
  '\n    after:  ', arrFilter);

// flat
const arrNotFlat = ArrayI.from([1, 2, [3, 4]]);
const arrFlat = arrNotFlat.flat(Infinity);
console.log('flat:' +
  '\n    before: ', arrNotFlat,
  '\n    after:  ', arrFlat);

// flatMap
const arr2 = [1, 2, 3, 4];
const arrFlatMap = arr2.flatMap(x => [[x * 2]]);
console.log('flatMap:' +
  '\n    before: ', arr2,
  '\n    after:  ', arrFlatMap);

// map
const numbers = new ArrayI(1, 4, 9);
const roots = numbers.map( (num) => Math.sqrt(num));
console.log('map:' +
  '\n    before: ', numbers,
  '\n    after:  ', roots);

// pop
const plants = new ArrayI('broccoli', 'cauliflower', 'cabbage',
  'kale', 'tomato');
const pop = plants.pop();
console.log('pop:' +
  '\n    before: ', plants,
  '\n    after:  ', pop);

// push
const critters = new ArrayI("pigs", "goats", "sheep", "cows");
const push = critters.push('chickens', 'cats', 'dogs');
console.log('push:' +
  '\n    before: ', critters,
  '\n    after:  ', push);

// reverse
const array1 = new ArrayI('one', 'two', 'three');
const reversed = array1.reverse();
console.log('reverse:' +
  '\n    before: ', array1,
  '\n    after:  ', reversed);

// shift
const arr123 = new ArrayI(1,2,3);
const shift = arr123.shift();
console.log('shift:' +
  '\n    before: ', arr123,
  '\n    after:  ', shift);

// slice
const animals = new ArrayI('ant', 'bison', 'camel', 'duck', 'elephant');
const slice = animals.slice(2);
console.log('slice:' +
  '\n    before: ', animals,
  '\n    after:  ', slice);

// sort
const unsorted = new ArrayI('March', 'Jan', 'Feb', 'Dec');
const sorted = unsorted.sort();
console.log('sort:' +
  '\n    before: ', unsorted,
  '\n    after:  ', sorted);

// splice
const months = new ArrayI('Jan', 'March', 'April', 'June');
const splice = months.splice(1, 0, 'Feb');
console.log('splice:' +
  '\n    before: ', months,
  '\n    after:  ', splice);

// unshift
const array2 = new ArrayI(1,2,3);
const unshift = array2.unshift(4, 5);
console.log('unshift:' +
  '\n    before: ', array2,
  '\n    after:  ', unshift);


