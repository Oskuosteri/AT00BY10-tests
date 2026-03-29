import { describe, it, expect } from 'vitest'
import add from '../src/add.js'
import capitalize from '../src/capitalize.js'
import chunk from '../src/chunk.js'
import drop from '../src/drop.js'
import endsWith from '../src/endsWith.js'
import map from '../src/map.js'
import slice from '../src/slice.js'
import toNumber from '../src/toNumber.js'
import toString from '../src/toString.js'
import upperFirst from '../src/upperFirst.js'
import castArray from '../src/castArray.js'
import ceil from '../src/ceil.js'
import every from '../src/every.js'
import get from '../src/get.js'
import isArguments from '../src/isArguments.js'
import isArrayLike from '../src/isArrayLike.js'
import isArrayLikeObject from '../src/isArrayLikeObject.js'
import isBoolean from '../src/isBoolean.js'
import isBuffer from '../src/isBuffer.js'
import isDate from '../src/isDate.js'
import isEmpty from '../src/isEmpty.js'
// kommentti Coveralls commitille

describe('basic tests', () => {
  it('add works', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('capitalize works', () => {
    expect(capitalize('FRED')).toBe('Fred')
  })

  it.skip('chunk works', () => {
  expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]])
})

  it('drop works', () => {
    expect(drop([1,2,3], 1)).toEqual([2,3])
  })

  it('endsWith works', () => {
    expect(endsWith('abc', 'c')).toBe(true)
  })

  it('map works', () => {
    expect(map([1,2], x => x*2)).toEqual([2,4])
  })

  it('slice works', () => {
    expect(slice([1,2,3], 1)).toEqual([2,3])
  })

  it('toNumber works', () => {
    expect(toNumber('3')).toBe(3)
  })

  it('toString works', () => {
    expect(toString(123)).toBe('123')
  })

  it('upperFirst works', () => {
    expect(upperFirst('fred')).toBe('Fred')
  })

  it('castArray wraps values', () => {
    expect(castArray(1)).toEqual([1])
    expect(castArray([1, 2])).toEqual([1, 2])
  })

  it('ceil rounds up', () => {
    expect(ceil(4.006)).toBe(5)
    expect(ceil(6.004, 2)).toBe(6.01)
  })

  it('every checks all values', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true)
    expect(every([2, 3, 6], n => n % 2 === 0)).toBe(false)
  })

  it('get resolves nested paths', () => {
    const obj = { a: [{ b: { c: 3 } }] }
    expect(get(obj, 'a[0].b.c')).toBe(3)
    expect(get(obj, 'a.b.c', 'default')).toBe('default')
  })

  it('isArguments detects arguments objects', () => {
    const value = (function () { return arguments })(1, 2, 3)
    expect(isArguments(value)).toBe(true)
    expect(isArguments([1, 2, 3])).toBe(false)
  })

   it('isArrayLike detects array-like values', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true)
    expect(isArrayLike('abc')).toBe(true)
    expect(isArrayLike(() => {})).toBe(false)
  })

  it('isArrayLikeObject detects array-like objects', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true)
    expect(isArrayLikeObject('abc')).toBe(false)
  })

  it('isBoolean detects booleans', () => {
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(new Boolean(true))).toBe(true)
    expect(isBoolean(null)).toBe(false)
  })

  it('isBuffer detects buffers', () => {
    expect(isBuffer(Buffer.from('ab'))).toBe(true)
    expect(isBuffer(new Uint8Array(2))).toBe(false)
  })

  it('isDate detects dates', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate('2020-01-01')).toBe(false)
  })

    it('isEmpty detects empty values', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
  })
})