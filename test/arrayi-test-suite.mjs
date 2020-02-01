import ArrayI from '../arrayi.mjs';

export function run () {

  console.log('arrayi-test-suite.mjs run...');

    testSuite('../arrayi.mjs');

}

function testSuite (sourceFile) {
  console.error(`begin test of "${sourceFile}" ...`);

  console.log('\nmethods:');

// arrayI
  console.log('\narrayI:');
  const arrOld = ['f', 'r', 'e', 'd'];
  const arrI = ArrayI.arrayI(arrOld);
  console.log(
    '\n  const arrOld = [\'f\', \'r\', \'e\', \'d\'];' +
    '\n  const arrI = ArrayI.arrayI(arrOld);' +
    '\n  // expected output: ArrayI [\'f\', \'r\', \'e\', \'d\']' +
    '\n    arrOld:', arrOld,
    '\n    arrI:', arrI);

// arrayI2
  console.log('\narrayI2:');
  const arrO = [];
  const arrIm = ArrayI.arrayI(arrO);
  console.log(
    '\n  const arrO = [];' +
    '\n  const arrIm = ArrayI.arrayI(arrO);' +
    '\n  // expected output: ArrayI []' +
    '\n    arrO:', arrO,
    '\n    arrIm:', arrIm);

// arrayI3
  console.log('\narrayI3:');
  const arr1 = [1, 2, 'a', {foo: 'foo', bar: 'bar'}];
  const arrIz = ArrayI.arrayI(arr1);
  console.log(
    '\n  const arr1 = [1,2,\'a\',{foo: \'foo\', bar: \'bar\'}];' +
    '\n  const arrIz = ArrayI.arrayI(arr1);' +
    '\n  // expected output: ArrayI []' +
    '\n    arr1:', arr1,
    '\n    arrIz:', arrIz);

// from
  console.log('\nfrom:');
  const hello = 'hello';
  const from = ArrayI.from(hello);
  console.log(
    '\n  const hello = "hello";' +
    '\n  const from = ArrayI.from(hello);' +
    '\n  // expected output: ArrayI [ \'h\', \'e\', \'l\', \'l\', \'o\' ]' +
    '\n    hello:', '"' + hello + '"',
    '\n    from:', from);

// from2
  console.log('\nfrom2:');
  const ar123 = [1, 2, 3];
  const from2 = ArrayI.from(ar123, x => x + x);
  console.log(
    '\n  const ar123 = [1,2,3];' +
    '\n  const from2 = ArrayI.from(ar123, x => x + x);' +
    '\n  // expected output: ArrayI [2, 4, 6]' +
    '\n    ar123:', '"' + hello + '"',
    '\n    from2:', from2);

// of
  console.log('\nof:');
  const args = [1, 2, 3];
  const of = ArrayI.of(...args);
  console.log(
    '\n  const args = [1, 2, 3];' +
    '\n  const of = ArrayI.of(...args);' +
    '\n  // expected output: ArrayI [ 1, 2, 3 ]' +
    '\n    args:', args,
    '\n    of:', of);

  console.log('\nprototypes:');

// copyWithin
  console.log('\ncopyWithin:');
  const arrA = new ArrayI('a', 'b', 'c', 'd', 'e');
  const arrCW = arrA.copyWithin(0, 3, 4);
  console.log(
    '\n  const arrA = new ArrayI(\'a\', \'b\', \'c\', \'d\', \'e\');' +
    '\n  const arrCW = arrA.copyWithin(0, 3, 4);' +
    '\n  // expected output: ArrayI [ \'d\', \'b\', \'c\', \'d\', \'e\' ]' +
    '\n    arrA:', arrA,
    '\n    arrCW:', arrCW);

// fill
  console.log('\nfill:');
  const arrF = ArrayI.arrayI([1, 2, 3, 4]);
  const arrFill = arrF.fill(0, 2, 4);
  console.log(
    '\n  const arrF = ArrayI.arrayI([1, 2, 3, 4]);' +
    '\n  const arrFill = arrF.fill(0,2,4);' +
    '\n  // expected output: ArrayI [ 1, 2, 0, 0 ]' +
    '\n    arrF:', arrF,
    '\n    arrFill:', arrFill);

// filter
  console.log('\nfilter:');
  const words = new ArrayI('spray', 'limit', 'elite', 'exuberant',
    'destruction', 'present');
  const arrFilter = words.filter(word => word.length > 6);
  console.log(
    '\n  const words = new ArrayI(\'spray\', \'limit\', \'elite\', \'exuberant\',' +
    '\n        \'destruction\', \'present\');' +
    '\n  const arrFilter = words.filter(word => word.length > 6);' +
    '\n  // expected output: ArrayI [ \'exuberant\', \'destruction\',' +
    ' \'present\' ]' +
    '\n    before:', words,
    '\n    after:', arrFilter);

// flat
  console.log('\nflat:');
  const arrNotFlat = ArrayI.from([1, 2, [3, [4]]]);
  const arrFlat = arrNotFlat.flat(Infinity);
  console.log(
    '\n  const arrNotFlat = ArrayI.from([1, 2, [3, [4]]]);' +
    '\n  const arrFlat = arrNotFlat.flat(Infinity);' +
    '\n  // expected output: ArrayI [ 1, 2, 3, 4 ]' +
    '\n    arrNoFlat:', arrNotFlat,
    '\n    arrFlat:', arrFlat);

// flatMap
  console.log('\nflatMap:');
  const arr2 = ArrayI.arrayI([1, 2, 3, 4]);
  const arrFlatMap = arr2.flatMap(x => [[x * 2]]);
  console.log(
    '\n  const arr2 = ArrayI.arrayI(1, 2, 3, 4);' +
    '\n  const arrFlatMap = arr2.flatMap(x => [[x * 2]]);' +
    '\n  // expected output: ArrayI [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]' +
    '\n    arr2:', arr2,
    '\n    arrFlatMap:', arrFlatMap);

// map
  console.log('\nmap:');
  const numbers = new ArrayI(1, 4, 9);
  const roots = numbers.map((num) => Math.sqrt(num));
  console.log(
    '\n  const numbers = new ArrayI(1, 4, 9);' +
    '\n  const roots = numbers.map( (num) => Math.sqrt(num));' +
    '\n  // expected output: ArrayI [ 1, 2, 3 ]' +
    '\n    numbers:', numbers,
    '\n    roots:', roots);

// pop
  console.log('\npop:');
  const plants = new ArrayI('broccoli', 'cauliflower', 'cabbage',
    'kale', 'tomato');
  const pop = plants.pop();
  console.log(
    '\n  const plants = new ArrayI(\'broccoli\', \'cauliflower\', \'cabbage\',' +
    '\n        \'kale\', \'tomato\');' +
    '\n  const pop = plants.pop();' +
    '\n  // expected output: ArrayI [ \'broccoli\', \'cauliflower\', \'cabbage\', \'kale\' ]' +
    '\n    plants:', plants,
    '\n    pop:', pop);

// push
  console.log('\npush:');
  const critters = new ArrayI('pigs', 'goats', 'sheep', 'cows');
  const push = critters.push('chickens', 'cats', 'dogs');
  console.log(
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
  console.log('\nreverse:');
  const array1 = new ArrayI('one', 'two', 'three');
  const reversed = array1.reverse();
  console.log(
    '\n  const array1 = new ArrayI(\'one\', \'two\', \'three\');' +
    '\n  const reversed = array1.reverse();' +
    '\n  // expected output: ArrayI [ \'three\', \'two\', \'one\' ]' +
    '\n    array1:', array1,
    '\n    reversed:', reversed);

// shift
  console.log('\nshift:');
  const arr123 = new ArrayI(1, 2, 3);
  const shift = arr123.shift();
  console.log(
    '\n  const arr123 = new ArrayI(1,2,3);' +
    '\n  const shift = arr123.shift();' +
    '\n  // expected output: ArrayI [ 2, 3 ]' +
    '\n    arr123:', arr123,
    '\n    shift:', shift);

// slice
  console.log('\nslice:');
  const animals = new ArrayI('ant', 'bison', 'camel', 'duck', 'elephant');
  const slice = animals.slice(2);
  console.log(
    '\n  const animals = new ArrayI(\'ant\', \'bison\', \'camel\', \'duck\', \'elephant\');' +
    '\n  const slice = animals.slice(2);' +
    '\n  // expected output: ArrayI [ \'camel\', \'duck\', \'elephant\' ]' +
    '\n    animals:', animals,
    '\n    slice:', slice);

// sort
  console.log('\nsort:');
  const unsorted = new ArrayI('March', 'Jan', 'Feb', 'Dec');
  const sorted = unsorted.sort();
  console.log(
    '\n  const unsorted = new ArrayI(\'March\', \'Jan\', \'Feb\', \'Dec\');' +
    '\n  const sorted = unsorted.sort();' +
    '\n  // expected output: ArrayI [ \'Dec\', \'Feb\', \'Jan\', \'March\' ]' +
    '\n    unsorted:', unsorted,
    '\n    sorted:', sorted);

// splice
  console.log('\nsplice:');
  const months = new ArrayI('Jan', 'March', 'April', 'June');
  const splice = months.splice(1, 0, 'Feb');
  console.log(
    '\n  const months = new ArrayI(\'Jan\', \'March\', \'April\', \'June\');' +
    '\n  const splice = months.splice(1, 0, \'Feb\');' +
    '\n  // expected output: ArrayI [ \'Jan\', \'Feb\', \'March\', \'April\', \'June\' ]' +
    '\n    before:', months,
    '\n    after:', splice);

// unshift
  console.log('\nunshift:');
  const array2 = new ArrayI(1, 2, 3);
  const unshift = array2.unshift(4, 5);
  console.log(
    '\n  const array2 = new ArrayI(1,2,3);' +
    '\n  const unshift = array2.unshift(4, 5);' +
    '\n  // expected output: ArrayI [ 4, 5, 1, 2, 3 ]' +
    '\n    before:', array2,
    '\n    after:', unshift);

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
    '\n    mapArr:', mapArr,
    '\n    mapI:', mapI,
    '\n // vs:   ArrayI [ 1, 2, Map(2) { 0 => \'zero\', 1 =>' +
    ' [Function: foo] }, 42 ]');

// Set
  console.log('\nSet:');
  let mySet = new Set();
  mySet.add(1);
  mySet.add(5);
  mySet.add(5);
  mySet.add('some text');
  mySet.add({a: 1, b: 2});
  let mySetArr = [1,2,'a',mySet];
  let setArrI = ArrayI.arrayI(mySetArr);
  console.log(
    '\n  let mySet = new Set();' +
    '\n  mySet.add(1);' +
    '\n  mySet.add(5);' +
    '\n  mySet.add(5);' +
    '\n  mySet.add(\'some text\');' +
    '\n  mySet.add({a: 1, b: 2})' +
    '\n  let mySetArr = [1,2,\'a\',mySet];' +
    '\n  let setArrI = ArrayI.arrayI(mySetArr);' +
    '\n    mySetArr:', mySetArr,
    '\n    setArrI: ', setArrI,
    '\n // vs:       ArrayI [ 1, 2, \'a\', Set { 1, 5, \'some text\', { a: 1,' +
    ' b: 2 } } ]'
  );

  console.log('setArrI[3]',setArrI[3],'size:',setArrI[3].size);

}