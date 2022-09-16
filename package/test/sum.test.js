/**
 * Sum of collection tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  sum of collection
// ------------------------------------------------------------------------------
describe('sum', () => {
  describe('return value', () => {
    it('from a collection of [10, 12, 3, 18] the method should return 43', () => {
      const data = [10, 12, 3, 18]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getSumOfCollection()).toBe(43)
    })

    it('from a collection of [{ value: 10 }, { value: 20 }] the method should return 30', () => {
      const data = [{ value: 10 }, { value: 20 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getSumOfCollection()).toBe(30)
    })
  })
})
