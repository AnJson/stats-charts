/**
 * Validator class.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/**
 * Wrapper class for validation methods.
 *
 */
export class Validator {
  /**
   * Check if data is an object with value-property.
   *
   * @param {any} data - Data to verify as object with value-property.
   * @returns {boolean} - Is data a valid object.
   */
  isObjectWithPositiveNumberInValueProperty (data) {
    return (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      Object.keys(data).includes('value') &&
      this.isPositiveNumber(data.value)
    )
  }

  /**
   * Check if data is a number.
   *
   * @param {any} data - Data to verify as number.
   * @returns {boolean} - Is data a number.
   */
  isPositiveNumber (data) {
    return typeof data === 'number' && !Number.isNaN(data) && data >= 0
  }

  /**
   * Check if all data in an array is an object with value-property or if all data in the array are numbers.
   *
   * @param {any[]} datalist - Datalist to verify as an array of objects with value-property or as an array of numbers.
   * @returns {boolean} - Is data valid.
   */
  isValidStatsArray (datalist) {
    return (
      Array.isArray(datalist) &&
      (datalist.every((data) => this.isObjectWithPositiveNumberInValueProperty(data)) ||
        datalist.every((data) => this.isPositiveNumber(data)))
    )
  }

  /**
   * Check if data is a object.
   *
   * @param {any} data - Data to verify as object.
   * @returns {boolean} - Is data an object.
   */
  isObject (data) {
    return typeof data === 'object' && !Array.isArray(data) && data !== null
  }
}
