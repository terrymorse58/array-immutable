(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ArrayI = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// ArrayI - an immutable array class based on Array

const deepCopy = require('deep-copy-all').default;

let useDeepCopy = true;
const aiCopy = (arg) => deepCopy(arg, useDeepCopy);

module.exports = class ArrayI extends Array {

  static deepCopy (val) {
    if (typeof val === 'boolean') {
      useDeepCopy = val;
    }
    return useDeepCopy;
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




},{"deep-copy-all":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepCopy;

/**
 * return a deep copy of the source
 * @param {Date|[]|{}} source
 * @param {Boolean=true} goDeep - perform deep copy
 * @return {*}
 */
function deepCopy(source, goDeep = true) {
  let dest;

  if (!goDeep) {
    return shallowCopy(source);
  } // don't copy these types


  if (!source || isReferenceToImmutable(source)) {
    return source;
  }

  const sourceType = objectType(source); // create empty copy with class that matches source

  dest = objectBehaviors[sourceType].makeNew(source);

  if (objectBehaviors[sourceType].mayDeepCopy) {
    traverse(source, dest);
  }

  return dest;
}
/**
 * perform a shallow copy of source
 * @param {*} source
 * @return {*}
 */


function shallowCopy(source) {
  const sourceType = objectType(source);
  const makeShallow = objectBehaviors[sourceType].makeShallow;
  return makeShallow(source);
  /*
    if (sourceType === 'unknown') {
      return source;
    }
    if (sourceType === 'date') {
      return new Date(source.getTime());
    }
    if (sourceType === 'map') {
      return new Map(source);
    }
    if (sourceType === 'set') {
      return new Set(Array.from(source));
    }
  
    // an array or object
    let dest = objectBehaviors[sourceType].makeNew(source);
    dest = Object.assign(dest, source);
    return dest;
  */
}
/**
 * traverse source object and copy to destination object
 * @param {[]|{}} srcObject
 * @param {[]|{}} destObject
 */


function traverse(srcObject, destObject) {
  // TODO check for circular references
  const srcType = objectType(srcObject); // console.log('traverse srcType:',srcType);

  if (!objectBehaviors[srcType].mayDeepCopy) {
    return;
  }

  const srcKeyVals = objectBehaviors[srcType].keyVals(srcObject);
  const addElement = objectBehaviors[srcType].addElement;
  srcKeyVals.forEach(element => {
    const {
      key: elKey,
      value: elValue,
      descriptor: elDescriptor
    } = element;
    const elType = objectType(elValue);
    const mayDeepCopy = objectBehaviors[elType].mayDeepCopy;
    const elNew = mayDeepCopy ? objectBehaviors[elType].makeNew(elValue) : objectBehaviors[elType].makeShallow(elValue);
    addElement(destObject, elKey, elNew, elDescriptor);
    traverse(elValue, elNew);
  });
} // establish a keyword for an object


function objectType(obj) {
  if (isArray(obj)) {
    return 'array';
  } else if (isDate(obj)) {
    return 'date';
  } else if (isMap(obj)) {
    return 'map';
  } else if (isSet(obj)) {
    return 'set';
  } else if (isFunction(obj)) {
    return 'function';
  } else if (isObject(obj)) {
    return 'object';
  }

  return 'unknown';
}
/*
  behaviors for objects
  addElement: add a new element to the object
  makeNew: make a new, empty object
  makeShallow: make a shallow copy of source
  keyVals: make array of {key,value} pairs for object elements
  mayDeepCopy: true if object may be deep copied
*/


const objectBehaviors = {
  "array": {
    addElement: (array, key, value) => Array.prototype.push.call(array, value),
    makeNew: source => {
      const newArray = [];
      Object.setPrototypeOf(newArray, Object.getPrototypeOf(source));
      return newArray;
    },
    makeShallow: source => {
      const dest = [...source];
      Object.setPrototypeOf(dest, Object.getPrototypeOf(source));
      return dest;
    },
    keyVals: array => {
      let kvPairs = [];
      array.forEach((val, index) => {
        kvPairs.push({
          key: index,
          value: val
        });
      });
      return kvPairs;
    },
    mayDeepCopy: true
  },
  "date": {
    addElement: () => {},
    makeNew: date => new Date(date.getTime()),
    makeShallow: date => new Date(date.getTime()),
    keyVals: () => null,
    mayDeepCopy: false
  },
  "map": {
    addElement: (map, key, value) => map.set(key, value),
    makeNew: () => new Map(),
    makeShallow: sourceMap => new Map(sourceMap),
    keyVals: map => {
      let kvPairs = [];
      map.forEach((val, key) => {
        kvPairs.push({
          key: key,
          value: map.get(key)
        });
      });
      return kvPairs;
    },
    mayDeepCopy: true
  },
  "set": {
    addElement: (set, key, value) => set.add(value),
    makeNew: () => new Set(),
    makeShallow: set => new Set(set),
    keyVals: set => {
      let kvPairs = [];
      set.forEach(val => {
        kvPairs.push({
          key: null,
          value: val
        });
      });
      return kvPairs;
    },
    mayDeepCopy: true
  },
  'function': {
    addElement: (fn, key, value) => {
      console.error(`ERORR "function" addElement (function has no elements) key ="${key}"`);
    },
    makeNew: fn => fn,
    makeShallow: fn => fn,
    keyVals: () => null,
    mayDeepCopy: false
  },
  "object": {
    addElement: (obj, key, value, descriptor = null) => {
      if (descriptor) {
        Object.defineProperty(obj, key, { ...descriptor,
          value: value
        });
      } else {
        Object.defineProperty(obj, key, {
          value: value
        });
      } // obj[key] = value;

    },
    makeNew: source => {
      const newObj = {};
      Object.setPrototypeOf(newObj, Object.getPrototypeOf(source));
      return newObj;
    },
    makeShallow: source => {
      const dest = Object.assign({}, source);
      Object.setPrototypeOf(dest, Object.getPrototypeOf(source));
      return dest;
    },
    keyVals: obj => {
      let kvPairs = [];
      let propNames = Object.getOwnPropertyNames(obj); // console.log('"object" keyVals propNames:',propNames);

      propNames.forEach(propName => {
        const pDescriptor = Object.getOwnPropertyDescriptor(obj, propName);
        const prop = pDescriptor.value;
        kvPairs.push({
          key: propName,
          value: prop,
          descriptor: pDescriptor
        });
      }); // console.log('"object" kvPairs:',kvPairs);

      return kvPairs;
    },
    mayDeepCopy: true
  },
  "unknown": {
    addElement: () => {},
    makeNew: source => source,
    makeShallow: source => source,
    keyVals: () => [],
    mayDeepCopy: false
  }
};

function isPrimitive(item) {
  let type = typeof item;
  return type === 'number' || type === 'string' || type === 'boolean' || type === 'undefined' || type === 'bigint' || type === 'symbol' || item === null;
}

function isRegExp(item) {
  return item && item instanceof RegExp;
}

function isDate(item) {
  return item && item instanceof Date;
}

function isFunction(item) {
  return item && item instanceof Function;
}

function isArray(item) {
  return item && item instanceof Array;
}

function isMap(item) {
  return item && item instanceof Map;
}

function isWeakMap(item) {
  return item && item instanceof WeakMap;
}

function isSet(item) {
  return item && item instanceof Set;
}

function isWeakSet(item) {
  return item && item instanceof WeakSet;
}

function isObject(item) {
  return item && item instanceof Object;
} // returns true if item refers to an immutable or object that can't be cloned


function isReferenceToImmutable(item) {
  return isPrimitive(item) || isFunction(item) || isRegExp(item) || isWeakMap(item) || isWeakSet(item);
}

},{}]},{},[1])(1)
});