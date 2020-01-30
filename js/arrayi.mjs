// ArrayI - an immutable class based on Array

export default class ArrayI extends Array {

  static from (arrayLike, mapFn, thisArg) {
    return newArrayI(Array.from(arrayLike, mapFn, thisArg));
  }

  static of () {
    return newArrayI(Array.of(...arguments));
  }

  concat () {
    return newArrayI(Array.concat(...arguments));
  }

  copyWithin (target, start, end) {
    const arr = [...this];
    return newArrayI(arr.copyWithin(target, start, end));
  }

  fill (value, start, end) {
    const arr = [...this];
    return newArrayI(arr.fill(value, start, end));
  }

  filter (callback, thisArg) {
    const arr = [...this];
    return newArrayI(arr.filter(callback, thisArg));
  }

  flat (depth) {
    const arr = [...this];
    return newArrayI(arr.flat(depth));
  }

  flatMap (callback, thisArg) {
    const arr = [...this];
    return newArrayI(arr.flatMap(callback, thisArg));
  }

  map (callback, thisArg) {
    const arr = [...this];
    return newArrayI(arr.map(callback, thisArg));
  }

  pop () {
    const arr = [...this];
    arr.pop();
    return newArrayI(arr);
  }

  push () {
    const arr = [...this];
    arr.push(...arguments);
    return newArrayI(arr);
  }

  reverse () {
    const arr = [...this];
    return newArrayI(arr.reverse());
  }

  shift () {
    const arr = [...this];
    arr.shift();
    return newArrayI(arr);
  }

  slice (begin, end) {
    const arr = [...this];
    return newArrayI(arr.slice(begin, end));
  }

  sort (compareFn) {
    const arr = [...this];
    return newArrayI(arr.sort(compareFn));
  }

  splice (start, deleteCount = null, ...items) {
    const arr = [...this];
    arr.splice(start, deleteCount, ...items);
    return newArrayI(arr);
  }

  unshift () {
    const arr = [...this];
    arr.unshift(...arguments);
    return newArrayI(arr);
  }
}

function newArrayI(arr) {
  const arrayI = new ArrayI();
  Array.prototype.push.apply(arrayI, arr);
  return arrayI;
}
