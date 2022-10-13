/* eslint-disable no-unused-vars */
/**
 * Instance tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  CONSTANTS
// ------------------------------------------------------------------------------

const ERROR_MESSAGE_NOT_VALID_COLLECTION = 'Expected an array of objects with value-property holding a positive number or an array of positive numbers.'

// ------------------------------------------------------------------------------
//  instance
// ------------------------------------------------------------------------------
describe('instance', () => {
  describe('create instance', () => {
    it(`passing [{ value: 25 }, 20, { value: 13 }] should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_VALID_COLLECTION}'`, () => {
      const data = [{ value: 25 }, 20, { value: 13 }]

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_COLLECTION))
    })

    it(`passing [{ name: 'Ada' }, { value: 13 }] should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_VALID_COLLECTION}'`, () => {
      const data = [{ name: 'Ada' }, { value: 13 }]

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_COLLECTION))
    })

    it(`passing [20, '13'] should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_VALID_COLLECTION}'`, () => {
      const data = [20, '13']

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_COLLECTION))
    })

    it(`passing 20 should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_VALID_COLLECTION}'`, () => {
      const data = 20

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_COLLECTION))
    })

    it(`passing [20, -10] should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_VALID_COLLECTION}'`, () => {
      const data = [20, -10]

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_COLLECTION))
    })

    it(`passing [{ value: 20 }, { value: -10 }] should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_VALID_COLLECTION}'`, () => {
      const data = [{ value: 20 }, { value: -10 }]

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).toThrow(new TypeError(ERROR_MESSAGE_NOT_VALID_COLLECTION))
    })

    it('passing [20, 100] should NOT throw a TypeError', () => {
      const data = [20, 100]

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).not.toThrow(new TypeError())
    })

    it('passing [{ value: 100 }, { value: 12 }] should NOT throw a TypeError', () => {
      const data = [{ value: 100 }, { value: 12 }]

      expect(() => {
        const statsCollection = new StatsCollection(data)
      }).not.toThrow(new TypeError())
    })
  })
})
