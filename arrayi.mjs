// ArrayI - an immutable array class based on Array

export default class ArrayI extends Array {
  
  /**
   *  make ArrayI from copy of an Array
   * @param {Array} array
   * @return {ArrayI}
   */
  static arrayI (array = []) {
    if (!Array.isArray(array)) {
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

// perform a deep copy of the target array or object
function deepCopy (target) {

  let copy;

  if (!target) {
    return target;
  }

  // no need to deep copy primitives or functions
  if (isPrimitive(target) || isFunction(target)) {
    return target;
  }

  // duplicate and return Date objects
  if (isDate(target)) {
    return new Date(target.getTime());
  }

  if (isArrayI(target)) {
    copy = new ArrayI();
  } else if (isArray(target)) {
    copy = [];
  } else if (isObject(target)) {
    copy = {};
  }
  traverse(target, copy);
  return copy;

  function traverse (target, copy) {
    for (const key in target) {
      if (!target.hasOwnProperty(key)) {
        continue;
      }
      const element = target[key];
      let value, last;
      if (isPrimitive(element) || isFunction(element)) {
        value = element;
        add(copy, key, value);
      } else if (isDate(element)) {
        value = new Date(element.getTime());
        add(copy, key, value);
      } else if (isArrayI(element)) {
        value = new ArrayI();
        last = add(copy, key, value);
        traverse(element, last);
      } else if (isArray(element)) {
        value = [];
        last = add(copy, key, value);
        traverse(element, last);
      } else if (isObject(element)) {
        value = {};
        last = add(copy, key, value);
        traverse(element, last);
      }
    }
  }

  function add (copy, key, value) {
    if (isArrayI(copy) || isArray(copy)) {
      Array.prototype.push.call(copy, value);
      return copy[copy.length - 1];
    } else if (isObject(copy)) {
      copy[key] = value;
      return copy[key];
    }
  }

  function isPrimitive (item) {
    let type = typeof item;
    return (type === 'number' || type === 'string' || type === 'boolean');
  }

  function isDate (item) {
    return item instanceof Date;
  }

  function isFunction (item) {
    return item instanceof Function;
  }

  function isArrayI (item) {
    return item instanceof ArrayI;
  }

  function isArray (item) {
    return item instanceof Array;
  }

  function isObject (item) {
    return item instanceof Object;
  }

}


