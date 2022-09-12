/**
 * The Stats class.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */

/**
 * Wrapper class for stats-methods.
 *
 */
export class Stats {
  #collectionOfData = []

  constructor (collectionOfData) {

  }

  getCollectionInPercent () {

  }

  #getSumOfCollectionOfData () {
    // NOTE: Calculate sum of data.
  }

  /**
   * Check if data in #collectionOfData is an object with value-property.
   * 
   * @param {object} data - Data to verify as object with value-property.
   * @returns {boolean}
   */
  #isObjectWithValueProperty (data) {
    return (typeof data === 'object' && data.isArray()) && Object.keys(data).includes('value')
  }

  /**
   * Check if all data in #collectionOfData is a number.
   *
   * @param {number} - Data to verify as number.
   * @returns {boolean}
   */
  #isNumber (data) {
    return typeof data === 'number' && !Number.isNaN(data)
  }
}
