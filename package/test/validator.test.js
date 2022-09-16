/**
 * Tests for Validator module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

import { Validator } from '../src/helpers/Validator'

// ------------------------------------------------------------------------------
//  valid object
// ------------------------------------------------------------------------------
describe('valid object', () => {
  describe('return value', () => {
    it('should return true when argument is { value: 12 }', () => {
      const validator = new Validator()
      expect(validator.isObjectWithPositiveNumberInValueProperty({ value: 12 })).toBe(true)
    })

    it('should return false when argument is 12', () => {
      const validator = new Validator()
      expect(validator.isObjectWithPositiveNumberInValueProperty(12)).toBe(false)
    })

    it('should return false when argument is { value: "12" }', () => {
      const validator = new Validator()
      expect(validator.isObjectWithPositiveNumberInValueProperty({ value: '12' })).toBe(false)
    })

    it('should return false when argument is { value: NaN }', () => {
      const validator = new Validator()
      expect(validator.isObjectWithPositiveNumberInValueProperty({ value: NaN })).toBe(false)
    })
  })
})

// ------------------------------------------------------------------------------
//  positive number
// ------------------------------------------------------------------------------
describe('positive number', () => {
  describe('return value', () => {
    it('should return true when argument is 1', () => {
      const validator = new Validator()
      expect(validator.isPositiveNumber(1)).toBe(true)
    })

    it('should return true when argument is 0', () => {
      const validator = new Validator()
      expect(validator.isPositiveNumber(0)).toBe(true)
    })

    it('should return false when argument is -2', () => {
      const validator = new Validator()
      expect(validator.isPositiveNumber(-2)).toBe(false)
    })

    it('should return false when argument is "10"', () => {
      const validator = new Validator()
      expect(validator.isPositiveNumber('10')).toBe(false)
    })

    it('should return false when argument is NaN', () => {
      const validator = new Validator()
      expect(validator.isPositiveNumber(NaN)).toBe(false)
    })
  })
})

// ------------------------------------------------------------------------------
//  valid stats array
// ------------------------------------------------------------------------------
describe('valid stats array', () => {
  describe('return value', () => {
    it('should return false when argument is [{ value: 25 }, 20, { value: 13 }]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([{ value: 25 }, 20, { value: 13 }])).toBe(false)
    })

    it('should return false when argument is [{ name: "Ada" }, { value: 13 }]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([{ name: 'Ada' }, { value: 13 }])).toBe(false)
    })

    it('should return false when argument is [20, "13"]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([20, '13'])).toBe(false)
    })

    it('should return false when argument is 20', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray(20)).toBe(false)
    })

    it('should return false when argument is [20, -10]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([20, -10])).toBe(false)
    })

    it('should return false when argument is [{ value: 20 }, { value: -10 }]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([{ value: 20 }, { value: -10 }])).toBe(false)
    })

    it('should return true when argument is [20, 100]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([20, 100])).toBe(true)
    })

    it('should return true when argument is [{ value: 100 }, { value: 12 }]', () => {
      const validator = new Validator()
      expect(validator.isValidStatsArray([{ value: 100 }, { value: 12 }])).toBe(true)
    })
  })
})

// ------------------------------------------------------------------------------
//  object
// ------------------------------------------------------------------------------
describe('object', () => {
  describe('return value', () => {
    it('should return true when argument is {}', () => {
      const validator = new Validator()
      expect(validator.isObject({})).toBe(true)
    })

    it('should return true when argument is { title: "a" }', () => {
      const validator = new Validator()
      expect(validator.isObject({ title: 'a' })).toBe(true)
    })

    it('should return false when argument is [{ value: 13 }]', () => {
      const validator = new Validator()
      expect(validator.isObject([{ value: 13 }])).toBe(false)
    })

    it('should return false when argument is null', () => {
      const validator = new Validator()
      expect(validator.isObject(null)).toBe(false)
    })
  })
})
