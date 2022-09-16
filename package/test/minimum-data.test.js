/**
 * Data with minimum values tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  data with minimum
// ------------------------------------------------------------------------------
describe('data with minimum', () => {
  describe('return value', () => {
    it('from a collection of [10, 12, 3, 18] the method should return [3]', () => {
      const data = [10, 12, 3, 18]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMinimumValues()).toEqual([3])
    })

    it('from a collection of [10, 12, 3, 13, 3] the method should return [3, 3]', () => {
      const data = [10, 12, 3, 13, 3]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMinimumValues()).toEqual([3, 3])
    })

    it('from a collection of [{ value: 1 }, { value: 3 }] the method should return [{ value: 1 }]', () => {
      const data = [{ value: 1 }, { value: 3 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMinimumValues()).toEqual([{ value: 1 }])
    })

    it('from a collection of [{ title: "a", value: 10 }, { title: "b", value: 3 }, { title: "c", value: 3 }] the method should return [{ title: "b", value: 3 }, { title: "c", value: 3 }]', () => {
      const data = [{ title: 'a', value: 10 }, { title: 'b', value: 3 }, { title: 'c', value: 3 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMinimumValues()).toEqual([{ title: 'b', value: 3 }, { title: 'c', value: 3 }])
    })
  })
})
