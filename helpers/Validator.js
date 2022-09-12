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
  isObjectWithNumberInValueProperty (data) {
    return (typeof data === 'object' && !Array.isArray(data)) && (Object.keys(data).includes('value') && this.isNumber(data.value))
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
   * @param {any[]} datalist - Datalist to verify as an array of objects with value-property or as an array of numbers.
   * @returns {boolean}
   */
   isAllNumbersOrObjectsWithValueProperty (datalist) {
    return Array.isArray(datalist) && (datalist.every(data => this.isObjectWithNumberInValueProperty(data)) || datalist.every(data => this.isNumber(data)))
  }
}