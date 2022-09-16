/**
 * Data with maximum values tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  data with maximum
// ------------------------------------------------------------------------------
describe('data with maximum', () => {
  describe('return value', () => {
    it('from a collection of [10, 12, 3, 18] the method should return [18]', () => {
      const data = [10, 12, 3, 18]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMaximumValues()).toEqual([18])
    })

    it('from a collection of [10, 12, 3, 13, 13] the method should return [13, 13]', () => {
      const data = [10, 12, 3, 13, 13]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMaximumValues()).toEqual([13, 13])
    })

    it('from a collection of [{ value: 1 }, { value: 3 }] the method should return [{ value: 3 }]', () => {
      const data = [{ value: 1 }, { value: 3 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMaximumValues()).toEqual([{ value: 3 }])
    })

    it('from a collection of [{ title: "a", value: 10 }, { title: "b", value: 3 }, { title: "c", value: 10 }] the method should return [{ title: "a", value: 10 }, { title: "c", value: 10 }]', () => {
      const data = [{ title: 'a', value: 10 }, { title: 'b', value: 3 }, { title: 'c', value: 10 }]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.getDataWithMaximumValues()).toEqual([{ title: 'a', value: 10 }, { title: 'c', value: 10 }])
    })
  })
})
