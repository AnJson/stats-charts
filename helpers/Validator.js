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
   * @returns {boolean}
   */
  isObjectWithValueProperty (data) {
    return (typeof data === 'object' && data.isArray()) && Object.keys(data).includes('value')
  }

  /**
   * Check if data is a number.
   *
   * @param {any} - Data to verify as number.
   * @returns {boolean}
   */
  isNumber (data) {
    return typeof data === 'number' && !Number.isNaN(data)
  }

  /**
   * Check if all data in an array is an object with value-property or if all data in the array are numbers.
   * 
   * @param {any[]} data - Data to verify as object with value-property.
   * @returns {boolean}
   */
   isAllNumbersOrObjectsWithValueProperty (data) {
    return data.isArray() && (collectionOfData.every(data => validator.isObjectWithValueProperty(data)) || collectionOfData.every(data => validator.isNumber(data)))
  }
}