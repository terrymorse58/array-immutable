"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// ArrayI - an immutable array class based on Array
class ArrayI extends Array {
  /**
   *  make ArrayI from copy of an Array
   * @param {Array} array
   * @return {ArrayI}
   */
  static arrayI(array = []) {
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


  static from(arrayLike, mapFn, thisArg) {
    return this.arrayI(deepCopy(Array.from(arrayLike, mapFn, thisArg)));
  }
  /**
   * @param {...*} elements
   * @return {ArrayI}
   */


  static of(...elements) {
    return this.arrayI(deepCopy(Array.of(...arguments)));
  }
  /**
   * @param {...*} values
   * @return {ArrayI}
   */


  concat(...values) {
    return this.constructor.arrayI(deepCopy(Array.concat(...arguments)));
  }
  /**
   * @param {Number} target
   * @param {Number} [start]
   * @param {Number} [end]
   * @return {ArrayI}
   */


  copyWithin(target, start, end) {
    const from = deepCopy([...this]);
    return this.constructor.arrayI(from.copyWithin(...arguments));
  }
  /**
   * @param {number|string|array|object} value
   * @param {number} [start]
   * @param  {number} [end]
   * @return {ArrayI}
   */


  fill(value, start, end) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.fill(...arguments));
  }
  /**
   * @param {function} callback
   * @param {object} [thisArg]
   * @return {ArrayI}
   */


  filter(callback, thisArg) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.filter(...arguments));
  }
  /**
   * @param {number} [depth]
   * @return {ArrayI}
   */


  flat(depth) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.flat(depth));
  }
  /**
   * @param {function} callback
   * @return {ArrayI}
   */


  flatMap(callback) {
    const arr = deepCopy([...this]);
    const flatM = arr.flatMap(...arguments);
    return this.constructor.arrayI(flatM);
  }
  /**
   * @param {function} callback
   * @param {object} [thisArg]
   * @return {ArrayI}
   */


  map(callback, thisArg) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.map(...arguments));
  }

  pop() {
    const arr = deepCopy([...this]);
    arr.pop();
    return this.constructor.arrayI(arr);
  }
  /**
   * @param {...*} elements
   * @return {ArrayI}
   */


  push(...elements) {
    const arr = deepCopy([...this]);
    arr.push(...arguments);
    return this.constructor.arrayI(arr);
  }

  reverse() {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.reverse());
  }

  shift() {
    const arr = deepCopy([...this]);
    arr.shift();
    return this.constructor.arrayI(arr);
  }
  /**
   * @param {number} begin
   * @param {number} [end]
   * @return {ArrayI}
   */


  slice(begin, end) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.slice(...arguments));
  }
  /**
   * @param {function} [compareFn]
   * @return {ArrayI}
   */


  sort(compareFn) {
    const arr = deepCopy([...this]);
    return this.constructor.arrayI(arr.sort(compareFn));
  }
  /**
   * @param {number} start
   * @param {number} [deleteCount]
   * @param {...*} [itemsToAdd]
   * @return {ArrayI}
   */


  splice(start, deleteCount, ...itemsToAdd) {
    const arr = deepCopy([...this]);
    arr.splice(...arguments);
    return this.constructor.arrayI(arr);
  }
  /**
   * @param {...*} elements
   * @return {ArrayI}
   */


  unshift(...elements) {
    const arr = deepCopy([...this]);
    arr.unshift(...arguments);
    return this.constructor.arrayI(arr);
  }

}
/**
 * perform a deep copy of the source
 * @param {Date|ArrayI|[]|{}|number|string|boolean} source
 * @return {*}
 */


exports.default = ArrayI;

function deepCopy(source) {
  let copy;

  if (!source) {
    return source;
  } // no need to deep copy primitives or functions


  if (isPrimitive(source) || isFunction(source)) {
    return source;
  } // simply duplicate and return Date objects


  if (isDate(source)) {
    return new Date(source.getTime());
  } // create empty copy of the correct type


  if (isArrayI(source)) {
    copy = new ArrayI();
  } else if (isArray(source)) {
    copy = [];
  } else if (isObject(source)) {
    copy = {};
  }

  traverse(source, copy);
  return copy;
  /**
   * recursively traverse source object to create duplicate
   * @param {ArrayI|Array|Object} srcObject
   * @param {ArrayI|Array|Object} duplicate
   */

  function traverse(srcObject, duplicate) {
    for (const key in srcObject) {
      if (!srcObject.hasOwnProperty(key)) {
        continue;
      }

      const element = srcObject[key];

      if (isPrimitive(element) || isFunction(element)) {
        addToObject(duplicate, key, element);
      } else if (isDate(element)) {
        addToObject(duplicate, key, new Date(element.getTime()));
      } else if (isArrayI(element)) {
        traverse(element, addToObject(duplicate, key, new ArrayI()));
      } else if (isArray(element)) {
        traverse(element, addToObject(duplicate, key, []));
      } else if (isObject(element)) {
        traverse(element, addToObject(duplicate, key, {}));
      }
    }
  }
  /**
   * add element to object
   * @param {Array|ArrayI|Object} obj
   * @param {number|string} key
   * @param {*} value
   * @return {*}
   */


  function addToObject(obj, key, value) {
    if (isArrayI(obj) || isArray(obj)) {
      Array.prototype.push.call(obj, value);
      return obj[obj.length - 1];
    } else if (isObject(obj)) {
      obj[key] = value;
      return obj[key];
    }
  }

  function isPrimitive(item) {
    let type = typeof item;
    return type === 'number' || type === 'string' || type === 'boolean';
  }

  function isDate(item) {
    return item instanceof Date;
  }

  function isFunction(item) {
    return item instanceof Function;
  }

  function isArrayI(item) {
    return item instanceof ArrayI;
  }

  function isArray(item) {
    return item instanceof Array;
  }

  function isObject(item) {
    return item instanceof Object;
  }
}
