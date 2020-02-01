import deepCopy from '../deepcopy.mjs';

console.log('\ndeepCopy tests...');

console.log('\nTest 1:');
let src1 = [1,2,3,[[[[[4,5]]]]]];
let dest1 = deepCopy(src1);
src1[2] = 30000;
console.log(
  '  let src = [1,2,3,[[[[[4,5]]]]]];\n' +
  '  let dest = deepCopy(src);\n' +
  '  src1[2] = 30000;\n' +
  '    src: ',JSON.stringify(src1,null), '\n' +
  '    dest:',JSON.stringify(dest1,null)
);

console.log('\nTest 2:');
let src2 = ["a", 42, {name: "terry", age: "old", hobbies: ["sleeping", "eating"]}];
let dest2 = deepCopy(src2);
src2[2].age = "secret";
src2[2].hobbies[0] = "cycling";
console.log(
  '  let src2 = ["a", 42, {name: "terry", age: "old", hobbies: ["sleeping",' +
  ' "eating"]}];\n' +
  '  let dest2 = deepCopy(src2);\n' +
  '  src2[2].age = "secret";\n' +
  '  src2[2].hobbies[0] = "cycling";\n' +
  '    src2: ',JSON.stringify(src2), '\n' +
  '    dest2:',JSON.stringify(dest2), '\n'
);

console.log('\nTest3:');
let myMap = new Map();
let keyString = 'a string';
let keyObj = {};
let keyFunc = function () {};
myMap.set(keyString, 'value associated with \'a string\'');
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');
let dest3 = deepCopy(myMap);
myMap.delete(keyFunc);
console.log(
  '  let myMap = new Map();\n' +
  '  ...\n' +
  '  let dest3 = deepCopy(myMap);\n' +
  '  myMap.delete(keyFunc);\n' +
  '    myMap:', myMap, '\n' +
  '    dest3:', dest3
);

console.log('\nTest4:');
let src4 = {nums: [1,5,[22,[[44]]]], map: myMap};
let dest4 = deepCopy(src4);
src4.nums[2][0] = 220000;
console.log(
  '  let src4 = {nums: [1,5,[22,[[44]]]], map: myMap};\n' +
  '  let dest4 = deepCopy(src4);\n' +
  '  src4.nums[2][0] = 220000;\n' +
  '    src4:',src4, '\n' +
  '    dest4:', dest4
);


console.error('deepCopy tests complete.\n');



