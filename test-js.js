const ArrayI = require('./arrayi.js').default;


console.log('\nArrayI tests...');
console.error('ArrayI test begin...');

console.log('ArrayI:',ArrayI,
  '\n    typeof ArrayI:', typeof ArrayI);

console.log('\nmethods:');

// arrayI
const arrOld = ['f', 'r', 'e', 'd'];
const arrI = ArrayI.arrayI(arrOld);
console.log('\narrayI:' +
  '\n  const arrOld = [\'f\', \'r\', \'e\', \'d\'];' +
  '\n  const arrI = ArrayI.arrayI(arrOld);' +
  "\n  // expected output: ArrayI [\'f\', \'r\', \'e\', \'d\']" +
  '\n    arrOld:', arrOld,
  '\n    arrI:', arrI);

const arrO = [];
const arrIm = ArrayI.arrayI(arrO);
console.log('\narrayI:' +
  '\n  const arrO = [];' +
  '\n  const arrI = ArrayI.arrayI(arrOld);' +
  '\n  // expected output: ArrayI []' +
  '\n    arrO:', arrO,
  '\n    arrIm:', arrIm);

// from
const hello = "hello";
const from = ArrayI.from(hello);
console.log('\nfrom:' +
  '\n  const hello = "hello";' +
  '\n  const from = ArrayI.from(hello);' +
  '\n  // expected output: ArrayI [ \'h\', \'e\', \'l\', \'l\', \'o\' ]' +
  '\n    hello:', '"' + hello + '"',
  '\n    from:', from);

const ar123 = [1,2,3];
const from2 = ArrayI.from(ar123, x => x + x);
console.log('\nfrom2:' +
  '\n  const ar123 = [1,2,3];' +
  '\n  const from2 = ArrayI.from(ar123, x => x + x);' +
  '\n  // expected output: ArrayI [2, 4, 6]' +
  '\n    ar123:', '"' + hello + '"',
  '\n    from2:', from2);

// of
const args = [1, 2, 3];
const of = ArrayI.of(...args);
console.log('\nof:' +
  '\n  const args = [1, 2, 3];' +
  '\n  const of = ArrayI.of(...args);' +
  '\n  // expected output: ArrayI [ 1, 2, 3 ]' +
  '\n    args:', args,
  '\n    of:', of);

console.log('\nprototypes:');

// copyWithin
const arrA = new ArrayI('a', 'b', 'c', 'd', 'e');
const arrCW = arrA.copyWithin(0, 3, 4);
console.log('\ncopyWithin:' +
  '\n  const arrA = new ArrayI(\'a\', \'b\', \'c\', \'d\', \'e\');' +
  '\n  const arrCW = arrA.copyWithin(0, 3, 4);' +
  '\n  // expected output: ArrayI [ \'d\', \'b\', \'c\', \'d\', \'e\' ]' +
  '\n    arrA:', arrA,
  '\n    arrCW:', arrCW);

// fill
const arrF = ArrayI.arrayI([1, 2, 3, 4]);
const arrFill = arrF.fill(0,2,4);
console.log('\nfill:' +
  '\n  const arrF = ArrayI.arrayI([1, 2, 3, 4]);' +
  '\n  const arrFill = arrF.fill(0,2,4);' +
  '\n  // expected output: ArrayI [ 1, 2, 0, 0 ]' +
  '\n    arrF:', arrF,
  '\n    arrFill:', arrFill);

// filter
const words = new ArrayI('spray', 'limit', 'elite', 'exuberant',
  'destruction', 'present');
const arrFilter = words.filter(word => word.length > 6);
console.log('\nfilter:' +
  '\n  const words = new ArrayI(\'spray\', \'limit\', \'elite\', \'exuberant\',' +
  '\n        \'destruction\', \'present\');' +
  '\n  const arrFilter = words.filter(word => word.length > 6);' +
  '\n  // expected output: ArrayI [ \'exuberant\', \'destruction\',' +
  ' \'present\' ]' +
  '\n    before:', words,
  '\n    after:', arrFilter);

// flat
const arrNotFlat = ArrayI.from([1, 2, [3, [4]]]);
const arrFlat = arrNotFlat.flat(Infinity);
console.log('\nflat:' +
  '\n  const arrNotFlat = ArrayI.from([1, 2, [3, [4]]]);' +
  '\n  const arrFlat = arrNotFlat.flat(Infinity);' +
  '\n  // expected output: ArrayI [ 1, 2, 3, 4 ]' +
  '\n    arrNoFlat:', arrNotFlat,
  '\n    arrFlat:', arrFlat);

// flatMap
const arr2 = ArrayI.arrayI([1, 2, 3, 4]);
const arrFlatMap = arr2.flatMap(x => [[x * 2]]);
console.log('\nflatMap:' +
  '\n  const arr2 = ArrayI.arrayI(1, 2, 3, 4);' +
  '\n  const arrFlatMap = arr2.flatMap(x => [[x * 2]]);' +
  '\n  // expected output: ArrayI [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]' +
  '\n    arr2:', arr2,
  '\n    arrFlatMap:', arrFlatMap);

// map
const numbers = new ArrayI(1, 4, 9);
const roots = numbers.map( (num) => Math.sqrt(num));
console.log('\nmap:' +
  '\n  const numbers = new ArrayI(1, 4, 9);' +
  '\n  const roots = numbers.map( (num) => Math.sqrt(num));' +
  '\n  // expected output: ArrayI [ 1, 2, 3 ]' +
  '\n    numbers:', numbers,
  '\n    roots:', roots);

// pop
const plants = new ArrayI('broccoli', 'cauliflower', 'cabbage',
  'kale', 'tomato');
const pop = plants.pop();
console.log('\npop:' +
  '\n  const plants = new ArrayI(\'broccoli\', \'cauliflower\', \'cabbage\',' +
  '\n        \'kale\', \'tomato\');' +
  '\n  const pop = plants.pop();' +
  '\n  // expected output: ArrayI [ \'broccoli\', \'cauliflower\', \'cabbage\', \'kale\' ]' +
  '\n    plants:', plants,
  '\n    pop:', pop);

// push
const critters = new ArrayI("pigs", "goats", "sheep", "cows");
const push = critters.push('chickens', 'cats', 'dogs');
console.log('\npush:' +
  '\n  const critters = new ArrayI("pigs", "goats", "sheep", "cows");' +
  '\n  const push = critters.push(\'chickens\', \'cats\', \'dogs\');' +
  '\n  // expected output: ArrayI [\n' +
  '          \'pigs\',     \'goats\',\n' +
  '          \'sheep\',    \'cows\',\n' +
  '          \'chickens\', \'cats\',\n' +
  '          \'dogs\'\n' +
  '        ]' +
  '\n    critters:', critters,
  '\n    push:', push);

// reverse
const array1 = new ArrayI('one', 'two', 'three');
const reversed = array1.reverse();
console.log('\nreverse:' +
  '\n  const array1 = new ArrayI(\'one\', \'two\', \'three\');' +
  '\n  const reversed = array1.reverse();' +
  '\n  // expected output: ArrayI [ \'three\', \'two\', \'one\' ]' +
  '\n    array1:', array1,
  '\n    reversed:', reversed);

// shift
const arr123 = new ArrayI(1,2,3);
const shift = arr123.shift();
console.log('\nshift:' +
  '\n  const arr123 = new ArrayI(1,2,3);' +
  '\n  const shift = arr123.shift();' +
  '\n  // expected output: ArrayI [ 2, 3 ]' +
  '\n    arr123:', arr123,
  '\n    shift:', shift);

// slice
const animals = new ArrayI('ant', 'bison', 'camel', 'duck', 'elephant');
const slice = animals.slice(2);
console.log('\nslice:' +
  '\n  const animals = new ArrayI(\'ant\', \'bison\', \'camel\', \'duck\', \'elephant\');' +
  '\n  const slice = animals.slice(2);' +
  '\n  // expected output: ArrayI [ \'camel\', \'duck\', \'elephant\' ]' +
  '\n    animals:', animals,
  '\n    slice:', slice);

// sort
const unsorted = new ArrayI('March', 'Jan', 'Feb', 'Dec');
const sorted = unsorted.sort();
console.log('\nsort:' +
  '\n  const unsorted = new ArrayI(\'March\', \'Jan\', \'Feb\', \'Dec\');' +
  '\n  const sorted = unsorted.sort();' +
  '\n  // expected output: ArrayI [ \'Dec\', \'Feb\', \'Jan\', \'March\' ]' +
  '\n    unsorted:', unsorted,
  '\n    sorted:', sorted);

// splice
const months = new ArrayI('Jan', 'March', 'April', 'June');
const splice = months.splice(1, 0, 'Feb');
console.log('\nsplice:' +
  '\n  const months = new ArrayI(\'Jan\', \'March\', \'April\', \'June\');' +
  '\n  const splice = months.splice(1, 0, \'Feb\');' +
  '\n  // expected output: ArrayI [ \'Jan\', \'Feb\', \'March\', \'April\', \'June\' ]' +
  '\n    before:', months,
  '\n    after:', splice);

// unshift
const array2 = new ArrayI(1,2,3);
const unshift = array2.unshift(4, 5);
console.log('\nunshift:' +
  '\n  const array2 = new ArrayI(1,2,3);' +
  '\n  const unshift = array2.unshift(4, 5);' +
  '\n  // expected output: ArrayI [ 4, 5, 1, 2, 3 ]' +
  '\n    before:', array2,
  '\n    after:', unshift);

console.error('ArrayI test complete.\n');

