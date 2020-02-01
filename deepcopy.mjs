/**
 * return a deep copy of the source
 * @param {Date|ArrayI|[]|{}|number|string|boolean} source
 * @return {*}
 */
export default function deepCopy (source) {

  let copy;

  if (!source) {
    return source;
  }

  // don't copy these types
  if (isReferenceToImmutable(source)) {
    return source;
  }

  // simply duplicate and return Date objects
  if (isDate(source)) {
    return new Date(source.getTime());
  }

  // create empty copy with class that matches source
  const sourceType = objectType(source);
  if (sourceType === 'unknown') {
    throw Error(`deepCopy: not an object or a known type!`);
  }
  copy = emptyObjectMaker[sourceType](source);

  traverse(source, copy);
  return copy;

}

/**
 * recursively traverse source object and copy to destination object
 * @param {[]|{}} srcObject
 * @param {[]|{}} destObject
 */
function traverse (srcObject, destObject) {

  const containerType = objectType(srcObject);
  const srcElements = keyValPairs(srcObject);
  const addElement = elementAdder[containerType];

  //console.log('\ntraverse containerType:',containerType);
  //console.log('traverse srcElements:',srcElements);
  //console.log('traverse addElement:',addElement);

  srcElements.forEach(element => {
    const elValue = element.value, elKey = element.key;

    if (isReferenceToImmutable(elValue)) {
      addElement(destObject, elKey, elValue);
    }
    else if (isDate(elValue)) {
      const newDate = new Date(elValue.getTime());
      addElement(destObject, elKey, newDate);
    }
    else if (isArray(elValue)) {
      const newArray = emptyObjectMaker["array"](elValue);
      addElement(destObject, elKey, newArray);
      traverse(elValue, newArray);
    }
    else if (isMap(elValue)) {
      const newMap = emptyObjectMaker["map"]();
      addElement(destObject, elKey, newMap);
      traverse(elValue, newMap);
    }
    else if (isSet(elValue)) {
      const newSet = emptyObjectMaker["set"]();
      addElement(destObject, elKey, newSet);
      traverse(elValue, newSet);
    }
    else if (isObject(elValue)) {
      const newObject = emptyObjectMaker["object"](elValue);
      addElement(destObject, elKey, newObject);
      traverse(elValue, newObject);
    }
    else {
      // a catch-all here for unknown data types
      addElement(destObject, elKey, elValue);
    }
  });

}

// establish a keyword for an object
function objectType (obj) {
  if (isArray(obj)) {
    return 'array';
  } else if (isMap(obj)) {
    return 'map';
  } else if (isSet(obj)) {
    return 'set';
  } else if (isObject(obj)) {
    return 'object';
  }
  return 'unknown';
}

// add one element to an object
const elementAdder = {
  "array": (array, key, value) => {
    Array.prototype.push.call(array, value);
  },
  "map": (map, key, value) => {
    map.set(key, value)
  },
  "set": (set, key, value) => {
    set.add(value);
  },
  "object": (obj, key, value) => {
    obj[key] = value;
  },
  "unknown": () => {}
};

// make and return empty object that matches source type
const emptyObjectMaker = {
  'array': (source) => {
    const newArray = [];
    Object.setPrototypeOf(newArray, Object.getPrototypeOf(source));
    return newArray;
  },
  'map': () => {
    return new Map();
  },
  'set': () => {
    return new Set();
  },
  'object': (source) => {
    const newObj = {};
    Object.setPrototypeOf(newObj, Object.getPrototypeOf(source));
    return newObj;
  },
  'unknown': () => {return null;}
};

// add object {key, value} pairs to keyVals array
const keyValPairsMaker = {
  'array': (array, keyVals) => {
    array.forEach((val,index) => {
      keyVals.push({key: index, value: val});
    });
  },
  'map': (obj, keyVals) => {
    obj.forEach((val,key) => {
      keyVals.push({key: key, value: val});
    });
  },
  'set': (set, keyVals) => {
    set.forEach(val => {
      keyVals.push({key: null, value: val});
    });
  },
  'object': (obj, keyVals) => {
    for (let [key, val] of Object.entries(obj)) {
      keyVals.push({key: key, value: val});
    }
  },
  'unknown': (obj) => {
    console.log('keyValPairs - unrecognized object type object:',obj);
    throw Error(`object not a recognized type`);
  }
};

/**
 * create an array of {key, value} pairs from array, map, set, or object
 * @param {Array|Map|Object} object
 * @return {[{key, value}]}
 */
function keyValPairs(object) {
  const objType = objectType(object);
  let keyVals = [];
  keyValPairsMaker[objType](object,keyVals);
  return keyVals;
}

function isPrimitive (item) {
  let type = typeof item;
  return (type === 'number'
    || type === 'string'
    || type === 'boolean'
    || type === 'undefined'
    || type === 'bigint'
    || type === 'symbol'
    || item === null);
}

function isRegExp (item) {return item && item instanceof RegExp;}
function isDate (item) {return item && item instanceof Date;}
function isFunction (item) {return item && item instanceof Function;}
function isArray (item) {return item && item instanceof Array;}
function isMap (item) {return item && item instanceof Map;}
function isWeakMap (item) {return item && item instanceof WeakMap;}
function isSet (item) {return item && item instanceof Set;}
function isWeakSet (item) {return item && item instanceof WeakSet;}
function isObject (item) {return item && item instanceof Object;}

// returns true if item refers to an immutable or object that can't be cloned
function isReferenceToImmutable(item) {
  return isPrimitive(item) || isFunction(item) || isRegExp(item)
    || isWeakMap(item) || isWeakSet(item);
}
