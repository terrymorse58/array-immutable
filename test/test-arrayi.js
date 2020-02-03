// test of ArrayI
const ArrayI = require('../arrayi.js');

console.log('\nArrayI tests...');

const COPY_DEEP = true;

runTest();

console.error('ArrayI test complete.\n');


function runTest () {

  const starttime = (new Date()).getTime();

  testSuite(COPY_DEEP);

  const endtime = (new Date()).getTime();
  console.log(`\nElapsed time with deepCopy = ` +
    `${ArrayI.deepCopy()}: ${endtime-starttime} millseconds.`);

}

function testSuite (copyDeep = true) {
  console.error(`begin test ...`);

  ArrayI.deepCopy(copyDeep);
  console.log('\nDeep copying is: ', ArrayI.deepCopy(), '.');

  console.log('\nmethods:');

// arrayI
  console.log('\narrayI:');
  const arrOld = ['f', 'r', 'e', 'd'];
  const arrI = ArrayI.arrayI(arrOld);
  arrOld[0] = arrOld[0].toUpperCase();
  console.log(
    '\n  const arrOld = [\'f\', \'r\', \'e\', \'d\'];' +
    '\n  const arrI = ArrayI.arrayI(arrOld);' +
    '\n  arrOld[0] = arrOld[0].toUpperCase();' +
    '\n    arrOld:     ', arrOld,
    '\n    arrI:', arrI,
    '\n  // vs:  ArrayI [ \'f\', \'r\', \'e\', \'d\' ]');

// arrayI2
  console.log('\narrayI2:');
  const arr0 = [];
  const arrIm = ArrayI.arrayI(arr0);
  arr0.push("new stuff");
  console.log(
    '\n  const arr0 = [];' +
    '\n  const arrIm = ArrayI.arrayI(arr0);' +
    '\n  arr.push("new stuff");' +
    '\n    arr0: ', arr0,
    '\n    arrIm:', arrIm,
    '\n  // vs:   ArrayI []');

// arrayI3
  console.log('\narrayI3:');
  const arr1 = [1, 2, 'a', {foo: 'foo', bar: 'bar'}];
  const arrIz = ArrayI.arrayI(arr1);
  arr1[3].bar = "BAR-BAR";
  console.log(
    '\n  const arr1 = [1,2,\'a\',{foo: \'foo\', bar: \'bar\'}];' +
    '\n  const arrIz = ArrayI.arrayI(arr1);' +
    '\n  arr1[3].bar = "BAR-BAR";' +
    '\n    arr1:        ', arr1,
    '\n    arrIz:', arrIz,
    '\n  // vs:   ArrayI [ 1, 2, \'a\', { foo: \'foo\', bar: \'bar\' } ]');

// from
  console.log('\nfrom:');
  let hello = 'hello';
  const from = ArrayI.from(hello);
  hello = hello.toUpperCase();
  console.log(
    '\n  let hello = "hello";' +
    '\n  const from = ArrayI.from(hello);' +
    '\n  hello = hello.toUpperCase();' +
    '\n    hello:', '"' + hello + '"',
    '\n    from: ', from,
    '\n  // vs:   ArrayI [ \'h\', \'e\', \'l\', \'l\', \'o\' ]');

// from2
  console.log('\nfrom2:');
  let ar123 = [1, 2, 3];
  const from2 = ArrayI.from(ar123, x => x + x);
  ar123[2] = 33333333;
  console.log(
    '\n  let ar123 = [1,2,3];' +
    '\n  const from2 = ArrayI.from(ar123, x => x + x);' +
    '\n  ar123[2] = 33333333;' +
    '\n    ar123:', ar123,
    '\n    from2:', from2,
    '\n  // vs:   ArrayI [ 2, 4, 6 ]'
  );

// of
  console.log('\nof:');
  const args = [1, 2, 3];
  const of = ArrayI.of(...args);
  args[3] = 333333344400;
  console.log(
    '\n  const args = [1, 2, 3];' +
    '\n  const of = ArrayI.of(...args);' +
    '\n  args[3] = 333333344400;' +
    '\n    args:', args,
    '\n    of:  ', of,
    '\n  //vs:   ArrayI [ 1, 2, 3 ]');

  console.log('\nprototypes:');

// copyWithin
  console.log('\ncopyWithin:');
  const arrA = new ArrayI('a', 'b', 'c', 'd', 'e');
  const arrCW = arrA.copyWithin(0, 3, 4);
  console.log(
    '\n  const arrA = new ArrayI(\'a\', \'b\', \'c\', \'d\', \'e\');' +
    '\n  const arrCW = arrA.copyWithin(0, 3, 4);' +
    '\n    arrA: ', arrA,
    '\n    arrCW:', arrCW,
    '\n  // vs:   ArrayI [ \'d\', \'b\', \'c\', \'d\', \'e\' ]');

// fill
  console.log('\nfill:');
  const arrF = ArrayI.arrayI([1, 2, 3, 4]);
  const arrFill = arrF.fill(0, 2, 4);
  console.log(
    '\n  const arrF = ArrayI.arrayI([1, 2, 3, 4]);' +
    '\n  const arrFill = arrF.fill(0,2,4);' +
    '\n    arrF:   ', arrF,
    '\n    arrFill:', arrFill,
    '\n  // vs:     ArrayI [ 1, 2, 0, 0 ]');

// filter
  console.log('\nfilter:');
  const words = new ArrayI('spray', 'limit', 'elite', 'exuberant',
    'destruction', 'present');
  const arrFilter = words.filter(word => word.length > 6);
  console.log(
    '\n  const words = new ArrayI(\'spray\', \'limit\', \'elite\', \'exuberant\',' +
    '\n        \'destruction\', \'present\');' +
    '\n  const arrFilter = words.filter(word => word.length > 6);' +
    '\n    before:', words,
    '\n    after:', arrFilter,
    '\n  // vs:   ArrayI [ \'exuberant\', \'destruction\', \'present\' ]');

// flat
  console.log('\nflat:');
  const arrNotFlat = ArrayI.from([1, 2, [3, [4]]]);
  const arrFlat = arrNotFlat.flat(Infinity);
  console.log(
    '\n  const arrNotFlat = ArrayI.from([1, 2, [3, [4]]]);' +
    '\n  const arrFlat = arrNotFlat.flat(Infinity);' +
    '\n    arrNoFlat:', arrNotFlat,
    '\n    arrFlat:  ', arrFlat,
    '\n  // vs:       ArrayI [ 1, 2, 3, 4 ]');

// flatMap
  console.log('\nflatMap:');
  const arr2 = ArrayI.arrayI([1, 2, 3, 4]);
  const arrFlatMap = arr2.flatMap(x => [[x * 2]]);
  console.log(
    '\n  const arr2 = ArrayI.arrayI(1, 2, 3, 4);' +
    '\n  const arrFlatMap = arr2.flatMap(x => [[x * 2]]);' +
    '\n    arr2:      ', arr2,
    '\n    arrFlatMap:', arrFlatMap,
    '\n // vs:         ArrayI [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]');

// map
  console.log('\nmap:');
  const numbers = new ArrayI(1, 4, 9);
  const roots = numbers.map((num) => Math.sqrt(num));
  console.log(
    '\n  const numbers = new ArrayI(1, 4, 9);' +
    '\n  const roots = numbers.map( (num) => Math.sqrt(num));' +
    '\n    numbers:', numbers,
    '\n    roots:  ', roots,
    '\n  // vs:     ArrayI [ 1, 2, 3 ]');

// pop
  console.log('\npop:');
  const plants = new ArrayI('broccoli', 'cauliflower', 'cabbage',
    'kale', 'tomato');
  const pop = plants.pop();
  console.log(
    '\n  const plants = new ArrayI(\'broccoli\', \'cauliflower\', \'cabbage\',' +
    '\n        \'kale\', \'tomato\');' +
    '\n  const pop = plants.pop();' +
    '\n    plants:', plants,
    '\n    pop:   ', pop,
    '\n  // vs:    ArrayI [ \'broccoli\', \'cauliflower\', \'cabbage\',' +
    ' \'kale\' ]');

// push
  console.log('\npush:');
  const critters = new ArrayI('pigs', 'goats', 'sheep', 'cows');
  const push = critters.push('chickens', 'cats', 'dogs');
  console.log(
    '\n  const critters = new ArrayI("pigs", "goats", "sheep", "cows");' +
    '\n  const push = critters.push(\'chickens\', \'cats\', \'dogs\');' +
    '\n    critters:', critters,
    '\n    push:', push,
    '\n  // vs:  ArrayI [\n' +
    '  \'pigs\',     \'goats\',\n' +
    '  \'sheep\',    \'cows\',\n' +
    '  \'chickens\', \'cats\',\n' +
    '  \'dogs\'\n' +
    ']');

// reverse
  console.log('\nreverse:');
  const array1 = new ArrayI('one', 'two', 'three');
  const reversed = array1.reverse();
  console.log(
    '\n  const array1 = new ArrayI(\'one\', \'two\', \'three\');' +
    '\n  const reversed = array1.reverse();' +
    '\n    array1:', array1,
    '\n    reversed:', reversed,
    '\n  // vs:      ArrayI [ \'three\', \'two\', \'one\' ]');

// shift
  console.log('\nshift:');
  const arr123 = new ArrayI(1, 2, 3);
  const shift = arr123.shift();
  console.log(
    '\n  const arr123 = new ArrayI(1,2,3);' +
    '\n  const shift = arr123.shift();' +
    '\n    arr123:', arr123,
    '\n    shift: ', shift,
    '\n  // vs:    ArrayI [ 2, 3 ]');

// slice
  console.log('\nslice:');
  const animals = new ArrayI('ant', 'bison', 'camel', 'duck', 'elephant');
  const slice = animals.slice(2);
  console.log(
    '\n  const animals = new ArrayI(\'ant\', \'bison\', \'camel\', \'duck\', \'elephant\');' +
    '\n  const slice = animals.slice(2);' +
    '\n    animals:', animals,
    '\n    slice:  ', slice,
    '\n  // vs:     ArrayI [ \'camel\', \'duck\', \'elephant\' ]');

// sort
  console.log('\nsort:');
  const unsorted = new ArrayI('March', 'Jan', 'Feb', 'Dec');
  const sorted = unsorted.sort();
  console.log(
    '\n  const unsorted = new ArrayI(\'March\', \'Jan\', \'Feb\', \'Dec\');' +
    '\n  const sorted = unsorted.sort();' +
    '\n    unsorted:', unsorted,
    '\n    sorted:  ', sorted,
    '\n  // vs:      ArrayI [ \'Dec\', \'Feb\', \'Jan\', \'March\' ]');

// splice
  console.log('\nsplice:');
  const months = new ArrayI('Jan', 'March', 'April', 'June');
  const splice = months.splice(1, 0, 'Feb');
  console.log(
    '\n  const months = new ArrayI(\'Jan\', \'March\', \'April\', \'June\');' +
    '\n  const splice = months.splice(1, 0, \'Feb\');' +
    '\n    months:', months,
    '\n    splice:', splice,
    '\n  // vs:    ArrayI [ \'Jan\', \'Feb\', \'March\', \'April\', \'June\' ]');

// unshift
  console.log('\nunshift:');
  const array2 = new ArrayI(1, 2, 3);
  const unshift = array2.unshift(4, 5);
  console.log(
    '\n  const array2 = new ArrayI(1,2,3);' +
    '\n  const unshift = array2.unshift(4, 5);' +
    '\n    array2: ', array2,
    '\n    unshift:', unshift,
    '\n  // vs:     ArrayI [ 4, 5, 1, 2, 3 ]');

// Map
  console.log('\nMap:');
  let myMap = new Map();
  myMap.set(0, 'zero');
  myMap.set(1, function foo () {console.log('i am foo')});
  let mapArr = [1, 2, myMap, 42];
  let mapI = ArrayI.arrayI(mapArr);
  console.log(
    '\n  let myMap = new Map();' +
    '\n  myMap.set(0, \'zero\');' +
    '\n  myMap.set(1, function foo () {console.log(\'i am foo\')});' +
    '\n  let mapArr = [1,2,myMap,42];' +
    '\n  let mapI = ArrayI.arrayI(mapArr);' +
    '\n    mapArr:     ', mapArr,
    '\n    mapI:', mapI,
    '\n // vs:   ArrayI [ 1, 2, Map(2) { 0 => \'zero\', 1 =>' +
    ' [Function: foo] }, 42 ]');

// Set
  console.log('\nSet:');
  let mySet = new Set();
  mySet.add(1);
  mySet.add(5);
  mySet.add('some text');
  mySet.add({a: 1, b: 2});
  let mySetArr = [1,2,'a',mySet];
  let setArrI = ArrayI.arrayI(mySetArr);
  mySet.delete('some text');
  console.log(
    '\n  let mySet = new Set();' +
    '\n  mySet.add(1);' +
    '\n  mySet.add(5);' +
    '\n  mySet.add(5);' +
    '\n  mySet.add(\'some text\');' +
    '\n  mySet.add({a: 1, b: 2})' +
    '\n  let mySetArr = [1,2,\'a\',mySet];' +
    '\n  let setArrI = ArrayI.arrayI(mySetArr);' +
    '\n  mySet.delete(\'some text\');' +
    '\n    mySetArr:', mySetArr,
    '\n    setArrI: ', setArrI,
    '\n // vs:       ArrayI [ 1, 2, \'a\', Set(4) { 1, 5, \'some text\' { a:' +
    ' 1, b: 2 } } ]'
  );

}



