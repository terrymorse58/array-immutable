declare module 'array-immutable' {
  export default class ArrayI<T> extends Array {
    constructor(...values: T[]);

    /**
     * get or modify deep copying preference
     * @param {boolean} [copyDeep] leave blank to get current setting
     * @return {boolean} - current setting
     */
    static deepCopy(copyDeep?: boolean): boolean;

    /**
     * make ArrayI from copy of an Array
     * @param {Array} array
     * @return {ArrayI}
     */
    static arrayI<T>(array: T[]): ArrayI<T>;

    /**
     * @param {ArrayLike|Object|String} arrayLike
     * @param {Function} [mapFn]
     * @param {Object} [thisArg]
     * @return {ArrayI}
     */
    static from<T>(arrayLike: ArrayLike<T>, mapFn?: (value: T, index: number) => T[], thisArg?: object): ArrayI<T>

    /**
     * @param {...*} elements
     * @return {ArrayI}
     */
    static of<T>(...elements: T[]): ArrayI<T>;

    /**
     * @param {...*} values
     * @return {ArrayI}
     */
    concat<T>(...values: T[]): ArrayI<T>

    /**
     * @param {Number} target
     * @param {Number} [start]
     * @param {Number} [end]
     * @return {ArrayI}
     */
    copyWithin<T>(target: number, start: number, end: number): ArrayI<T>

    /**
     * @param {number|string|array|object} value
     * @param {number} [start]
     * @param  {number} [end]
     * @return {ArrayI}
     */
    fill<T>(value: T, start: number, end: number): ArrayI<T>;

    /**
     * @param {function} callback
     * @param {object} [thisArg]
     * @return {ArrayI}
     */
    filter<T>(callback: (element: T, index?: number, array?: ArrayI<T>) => T[], thisArg?: object): ArrayI<T>;

    /**
     * @param {number} [depth]
     * @return {ArrayI}
     */
    flat<T>(depth: number): ArrayI<T>;

    /**
     * @param {function} callback
     * @return {ArrayI}
     */
    flatMap<T>(callback: (value: T, index: number) => T[]): ArrayI<T>

    /**
     * @param {function} callback
     * @param {object} [thisArg]
     * @return {ArrayI}
     */
    map<T>(callback: (value: T, index: number) => T[], thisArg?: object): ArrayI<T>;

    pop<T>(): ArrayI<T>;

    /**
     * @param {...*} elements
     * @return {ArrayI}
     */
    push<T>(...elements: T[]): ArrayI<T>;

    reverse<T>(): ArrayI<T>;

    shift<T>(): ArrayI<T>;

    /**
     * @param {number} begin
     * @param {number} [end]
     * @return {ArrayI}
     */
    slice<T>(begin?: number, end?: number): ArrayI<T>;

    /**
     * @param {function} [compareFn]
     * @return {ArrayI}
     */
    sort<T>(compareFn: (first: T, second: T) => T[]): ArrayI<T>;

    /**
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [itemsToAdd]
     * @return {ArrayI}
     */
    splice<T>(start: number, deleteCount: number, ...itemsToAdd: T[]): ArrayI<T>;

    /**
     * @param {...*} elements
     * @return {ArrayI}
     */
    unshift<T>(...elements: T[]): ArrayI<T>;
  }
}