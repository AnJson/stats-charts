/**
 * Average tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  average
// ------------------------------------------------------------------------------
describe('average', () => {
  describe('return value', () => {
    it('from a collection of [10, 12, 8, 2] the method should return 8', () => {
      const data = [10, 12, 8, 2]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getAverageValue()).toBe(8)
    })

    it('from a collection of [{ value: 10 }, { value: 8 }, { value: 3}] the method should return 7', () => {
      const data = [{ value: 10 }, { value: 8 }, { value: 3 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getAverageValue()).toBe(7)
    })
  })
})
