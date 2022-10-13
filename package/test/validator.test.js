/**
 * Tests for Validator module.
 *
 * @author Anders Jonsson
 * @version 2.0.0
 */

import { Validator } from '../src/helpers/Validator.js'
// ------------------------------------------------------------------------------
//  CONSTANTS
// ------------------------------------------------------------------------------

const ERROR_MESSAGE_NOT_VALID_OBJECT = 'Expected an object with value-property holding a positive number.'
const ERROR_MESSAGE_NOT_POSITIVE_NUMBER = 'Expected a positive number.'
const ERROR_MESSAGE_NOT_VALID_STATS_ARRAY = 'Expected an array of objects with value-property holding a positive number or an array of positive numbers.'
const ERROR_MESSAGE_NOT_OBJECT = 'Expected an object.'

// ------------------------------------------------------------------------------
//  valid object
// ------------------------------------------------------------------------------
describe('valid object', () => {
  describe('exception', () => {
    it(`should NOT throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_OBJECT}" when argument is { value: 12 }`, () => {
      const validator = new Validator()
      expect(() => validator.validateObjectWithPositiveNumberInValueProperty({ value: 12 })).not.toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_OBJECT))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_OBJECT}" when argument is 12`, () => {
      const validator = new Validator()
      expect(() => validator.validateObjectWithPositiveNumberInValueProperty(12)).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_OBJECT))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_OBJECT}" when argument is { value: "12" }`, () => {
      const validator = new Validator()
      expect(() => validator.validateObjectWithPositiveNumberInValueProperty({ value: '12' })).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_OBJECT))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_OBJECT}" when argument is { value: NaN }`, () => {
      const validator = new Validator()
      expect(() => validator.validateObjectWithPositiveNumberInValueProperty({ value: NaN })).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_OBJECT))
    })
  })
})

// ------------------------------------------------------------------------------
//  positive number
// ------------------------------------------------------------------------------
describe('positive number', () => {
  describe('exception', () => {
    it(`should NOT throw Error with message "${ERROR_MESSAGE_NOT_POSITIVE_NUMBER}" when argument is 1`, () => {
      const validator = new Validator()
      expect(() => validator.validatePositiveNumber(1)).not.toThrow(new Error(ERROR_MESSAGE_NOT_POSITIVE_NUMBER))
    })

    it(`should NOT throw Error with message "${ERROR_MESSAGE_NOT_POSITIVE_NUMBER}" when argument is 0`, () => {
      const validator = new Validator()
      expect(() => validator.validatePositiveNumber(0)).not.toThrow(new Error(ERROR_MESSAGE_NOT_POSITIVE_NUMBER))
    })

    it(`should throw Error with message "${ERROR_MESSAGE_NOT_POSITIVE_NUMBER}" when argument is -2`, () => {
      const validator = new Validator()
      expect(() => validator.validatePositiveNumber(-2)).toThrow(new Error(ERROR_MESSAGE_NOT_POSITIVE_NUMBER))
    })

    it(`should throw Error with message "${ERROR_MESSAGE_NOT_POSITIVE_NUMBER}" when argument is "10"`, () => {
      const validator = new Validator()
      expect(() => validator.validatePositiveNumber('10')).toThrow(new Error(ERROR_MESSAGE_NOT_POSITIVE_NUMBER))
    })

    it(`should throw Error with message "${ERROR_MESSAGE_NOT_POSITIVE_NUMBER}" when argument is NaN`, () => {
      const validator = new Validator()
      expect(() => validator.validatePositiveNumber(NaN)).toThrow(new Error(ERROR_MESSAGE_NOT_POSITIVE_NUMBER))
    })
  })
})

// ------------------------------------------------------------------------------
//  valid stats array
// ------------------------------------------------------------------------------
describe('valid stats array', () => {
  describe('exception', () => {
    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [{ value: 25 }, 20, { value: 13 }]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([{ value: 25 }, 20, { value: 13 }])).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [{ name: "Ada" }, { value: 13 }]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([{ name: 'Ada' }, { value: 13 }])).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [20, "13"]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([20, '13'])).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is 20`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray(20)).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [20, -10]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([20, -10])).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [{ value: 20 }, { value: -10 }]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([{ value: 20 }, { value: -10 }])).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should NOT throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [20, 100]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([20, 100])).not.toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })

    it(`should NOT throw TypeError with message "${ERROR_MESSAGE_NOT_VALID_STATS_ARRAY}" when argument is [{ value: 100 }, { value: 12 }]`, () => {
      const validator = new Validator()
      expect(() => validator.validateValidStatsArray([{ value: 100 }, { value: 12 }])).not.toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_STATS_ARRAY))
    })
  })
})

// ------------------------------------------------------------------------------
//  object
// ------------------------------------------------------------------------------
describe('object', () => {
  describe('exception', () => {
    it(`should NOT throw TypeError with message "${ERROR_MESSAGE_NOT_OBJECT}" when argument is {}`, () => {
      const validator = new Validator()
      expect(() => validator.validateObject({})).not.toThrow(new TypeError(ERROR_MESSAGE_NOT_OBJECT))
    })

    it(`should NOT throw TypeError with message "${ERROR_MESSAGE_NOT_OBJECT}" when argument is { title: "a" }`, () => {
      const validator = new Validator()
      expect(() => validator.validateObject({ title: 'a' })).not.toThrow(new TypeError(ERROR_MESSAGE_NOT_OBJECT))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_OBJECT}" when argument is [{ value: 13 }]`, () => {
      const validator = new Validator()
      expect(() => validator.validateObject([{ value: 13 }])).toThrow(new TypeError(ERROR_MESSAGE_NOT_OBJECT))
    })

    it(`should throw TypeError with message "${ERROR_MESSAGE_NOT_OBJECT}" when argument is null`, () => {
      const validator = new Validator()
      expect(() => validator.validateObject(null)).toThrow(new TypeError(ERROR_MESSAGE_NOT_OBJECT))
    })
  })
})
