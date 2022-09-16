/**
 * Minimum tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  minimum
// ------------------------------------------------------------------------------
describe('minimum', () => {
  describe('return value', () => {
    it('from a collection of [10, 12, 3, 18] the method should return 3', () => {
      const data = [10, 12, 3, 18]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getMinimumValue()).toBe(3)
    })

    it('from a collection of [{ value: 10 }, { value: 20 }] the method should return 10', () => {
      const data = [{ value: 10 }, { value: 20 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getMinimumValue()).toBe(10)
    })
  })
})
