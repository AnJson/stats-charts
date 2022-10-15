/**
 * Collection of data with percent tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  collection of data with percent
// ------------------------------------------------------------------------------
describe('collection with percent', () => {
  describe('return value', () => {
    it('from a collection of [10, 12, 3, 18] the method should return [{ value: 10, percent: 0.23255813953488372 }, { value: 12, percent: 0.27906976744186046 }, { value: 3, percent: 0.06976744186046512 }, { value: 18, percent: 0.4186046511627907 }]', () => {
      const data = [10, 12, 3, 18]
      const statsCollection = new StatsCollection(data)
      const expectedResult = [
        {
          value: 10,
          percent: 0.23255813953488372
        },
        {
          value: 12,
          percent: 0.27906976744186046
        },
        {
          value: 3,
          percent: 0.06976744186046512
        },
        {
          value: 18,
          percent: 0.4186046511627907
        }
      ]
      expect(statsCollection.getDataWithPercent()).toEqual(expectedResult)
    })

    it('from a collection of [{ title: "a", value: 10 }, { title: "b", value: 12 }, { title: "c", value: 3 }, { title: "d", value: 18 }] the method should return [{ percent: 0.23255813953488372, title: "a", value: 10 }, { percent: 0.27906976744186046, title: "b", value: 12 }, { percent: 0.06976744186046512, title: "c", value: 3 }, { percent: 0.4186046511627907, title: "d", value: 18 }]', () => {
      const data = [{ title: 'a', value: 10 }, { title: 'b', value: 12 }, { title: 'c', value: 3 }, { title: 'd', value: 18 }]
      const statsCollection = new StatsCollection(data)
      const expectedResult = [
        {
          percent: 0.23255813953488372,
          title: 'a',
          value: 10
        },
        {
          percent: 0.27906976744186046,
          title: 'b',
          value: 12
        },
        {
          percent: 0.06976744186046512,
          title: 'c',
          value: 3
        },
        {
          percent: 0.4186046511627907,
          title: 'd',
          value: 18
        }
      ]
      expect(statsCollection.getDataWithPercent()).toEqual(expectedResult)
    })
  })
})
