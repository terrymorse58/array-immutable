// ArrayI - an immutable array class based on Array

const deepCopy = require('./node_modules/deep-copy-all/index');

// use deep copy by default, change with Array.deepCopy(true|false)
const copyOptions = {
  goDeep: undefined,
  includeNonEnumerable: undefined,
  maxDepth: undefined
}
const aiCopy = (arg) => deepCopy(arg, copyOptions);

module.exports = class ArrayI extends Array {

  /**
   * get or modify deep copying preference
   * @param {boolean} [copyDeep] leave blank to get current setting
   * @return {boolean} - current setting
   */
  static deepCopy (copyDeep= undefined) {
    if (typeof copyDeep === 'boolean') {
      copyOptions.goDeep = copyDeep;
    }
    return copyOptions.goDeep;
  }

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
    Array.prototype.push.apply(arrayI, aiCopy(array));
    return arrayI;
  }

  /**
   * @param {ArrayLike|Object|String} arrayLike
   * @param {Function} [mapFn]
   * @param {Object} [thisArg]
   * @return {ArrayI}
   */
  static from (arrayLike, mapFn, thisArg) {
    return this.arrayI(aiCopy(Array.from(arrayLike, mapFn, thisArg)));
  }

  /**
   * @param {...*} elements
   * @return {ArrayI}
   */
  static of (...elements) {
    return this.arrayI(aiCopy(Array.of(...arguments)));
  }

  /**
   * @param {...*} values
   * @return {ArrayI}
   */
  concat (...values) {
    return this.constructor.arrayI(aiCopy(Array.concat(...arguments)));
  }

  /**
   * @param {Number} target
   * @param {Number} [start]
   * @param {Number} [end]
   * @return {ArrayI}
   */
  copyWithin (target, start, end) {
    const from = aiCopy([...this]);
    return this.constructor.arrayI(from.copyWithin(...arguments));
  }

  /**
   * @param {number|string|array|object} value
   * @param {number} [start]
   * @param  {number} [end]
   * @return {ArrayI}
   */
  fill (value, start, end) {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.fill(...arguments));
  }

  /**
   * @param {function} callback
   * @param {object} [thisArg]
   * @return {ArrayI}
   */
  filter (callback, thisArg) {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.filter(...arguments));
  }

  /**
   * @param {number} [depth]
   * @return {ArrayI}
   */
  flat (depth) {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.flat(depth));
  }

  /**
   * @param {function} callback
   * @return {ArrayI}
   */
  flatMap (callback) {
    const arr = aiCopy([...this]);
    const flatM = arr.flatMap(...arguments);
    return this.constructor.arrayI(flatM);
  }

  /**
   * @param {function} callback
   * @param {object} [thisArg]
   * @return {ArrayI}
   */
  map (callback, thisArg) {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.map(...arguments));
  }

  pop () {
    const arr = aiCopy([...this]);
    arr.pop();
    return this.constructor.arrayI(arr);
  }

  /**
   * @param {...*} elements
   * @return {ArrayI}
   */
  push (...elements) {
    const arr = aiCopy([...this]);
    arr.push(...arguments);
    return this.constructor.arrayI(arr);
  }

  reverse () {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.reverse());
  }

  shift () {
    const arr = aiCopy([...this]);
    arr.shift();
    return this.constructor.arrayI(arr);
  }

  /**
   * @param {number} begin
   * @param {number} [end]
   * @return {ArrayI}
   */
  slice (begin, end) {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.slice(...arguments));
  }

  /**
   * @param {function} [compareFn]
   * @return {ArrayI}
   */
  sort (compareFn) {
    const arr = aiCopy([...this]);
    return this.constructor.arrayI(arr.sort(compareFn));
  }

  /**
   * @param {number} start
   * @param {number} [deleteCount]
   * @param {...*} [itemsToAdd]
   * @return {ArrayI}
   */
  splice (start, deleteCount, ...itemsToAdd) {
    const arr = aiCopy([...this]);
    arr.splice(...arguments);
    return this.constructor.arrayI(arr);
  }

  /**
   * @param {...*} elements
   * @return {ArrayI}
   */
  unshift (...elements) {
    const arr = aiCopy([...this]);
    arr.unshift(...arguments);
    return this.constructor.arrayI(arr);
  }
};



