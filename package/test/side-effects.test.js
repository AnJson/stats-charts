/**
 * Side-effect tests for the StatsCollection module.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../src/stats/StatsCollection'

// ------------------------------------------------------------------------------
//  no sideeffects
// ------------------------------------------------------------------------------
describe('side-effects', () => {
  describe('get data', () => {
    it('accessing collectionOfData-property should return a copy of the original data', () => {
      const data = [10, 12]
      const statsCollection = new StatsCollection(data)
      expect(statsCollection.collectionOfData).not.toBe(data)
    })
  })
})
