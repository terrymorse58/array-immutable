// ArrayI - an immutable array class based on Array

import deepCopy from './deepcopy.mjs';

export default class ArrayI extends Array {
  
  /**
   *  make ArrayI from copy of an Array
   * @param {Array} array
   * @return {ArrayI}
   */
  static arrayI (array = []) {
    if (!Array.isArray(array)) {
      console.error('!Array.isArray(array) array:', array);
      throw Error('ArrayI.arrayI parameter is not an array');
    }
    const arrayI = new ArrayI();
    Array.prototype.push.apply(arrayI, deepCopy(array));
    return arrayI;
  }

  /**
   * @param {ArrayLike|Object|String} arrayLike
   * @param {Function} [mapFn]
   * @param {Object} [thisArg]
   * @return {ArrayI}
   */
  static from (arrayLike, mapFn, thisArg) {
    return this.arrayI(deepCopy(Array.from(arrayLike, mapFn, thisArg)));
  }

  /**
   * @param {...*} elements
   * @return {ArrayI}
   */
  static of (...elements) {
    return this.arrayI(deepCopy(Array.of(...arguments)));
  }

  /**
   * @param {...*} values
   * @return {ArrayI}
   */
  concat (...values) {
    return this.constructor.arrayI(deepCopy(Array.concat(...arguments)));
  }

  /**
   * @param {Number} target
   * @param {Number} [start]
   * @param {Number} [end]
   * @return {ArrayI}
   */
  copyWithin (target, start, end) {
    const from = deepCopy([...this]);
    return this.constructor.arrayI(from.copyWithin(...arguments));
  }

  /**
   * @param {number|string|array|object} value
   * @param {number} [start]
   * @param  {number} [end]
   * @return {ArrayI}
   */
  fill (value, start, end) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.fill(...arguments));
  }

  /**
   * @param {function} callback
   * @param {object} [thisArg]
   * @return {ArrayI}
   */
  filter (callback, thisArg) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.filter(...arguments));
  }

  /**
   * @param {number} [depth]
   * @return {ArrayI}
   */
  flat (depth) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.flat(depth));
  }

  /**
   * @param {function} callback
   * @return {ArrayI}
   */
  flatMap (callback) {
    const arr = deepCopy([...this]);
    const flatM = arr.flatMap(...arguments);
    return this.constructor.arrayI(flatM);
  }

  /**
   * @param {function} callback
   * @param {object} [thisArg]
   * @return {ArrayI}
   */
  map (callback, thisArg) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.map(...arguments));
  }

  pop () {
    const arr = deepCopy([...this]);
    arr.pop();
    return this.constructor.arrayI(arr);
  }

  /**
   * @param {...*} elements
   * @return {ArrayI}
   */
  push (...elements) {
    const arr = deepCopy([...this]);
    arr.push(...arguments);
    return this.constructor.arrayI(arr);
  }

  reverse () {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.reverse());
  }

  shift () {
    const arr = deepCopy([...this]);
    arr.shift();
    return this.constructor.arrayI(arr);
  }

  /**
   * @param {number} begin
   * @param {number} [end]
   * @return {ArrayI}
   */
  slice (begin, end) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.slice(...arguments));
  }

  /**
   * @param {function} [compareFn]
   * @return {ArrayI}
   */
  sort (compareFn) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.sort(compareFn));
  }

  /**
   * @param {number} start
   * @param {number} [deleteCount]
   * @param {...*} [itemsToAdd]
   * @return {ArrayI}
   */
  splice (start, deleteCount, ...itemsToAdd) {
    const arr = deepCopy([...this]);
    arr.splice(...arguments);
    return this.constructor.arrayI(arr);
  }

  /**
   * @param {...*} elements
   * @return {ArrayI}
   */
  unshift (...elements) {
    const arr = deepCopy([...this]);
    arr.unshift(...arguments);
    return this.constructor.arrayI(arr);
  }
}



