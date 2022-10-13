/**
 * Validator class.
 *
 * @author Anders Jonsson
 * @version 2.0.0
 */

export class Validator {
  static validateObjectWithPositiveNumberInValueProperty (data) {
    const isValid = (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      Object.keys(data).includes('value') &&
      this.isPositiveNumber(data.value)
    )

    if (!isValid) {
      throw new TypeError('Expected an object with value-property holding a positive number.')
    }
  }

  static validatePositiveNumber (data) {
    return typeof data === 'number' && !Number.isNaN(data) && data >= 0
  }

  static validateValidStatsArray (datalist) {
    const isValid = (
      Array.isArray(datalist) &&
      (datalist.every((data) => this.isObjectWithPositiveNumberInValueProperty(data)) ||
        datalist.every((data) => this.isPositiveNumber(data)))
    )

    if (!isValid) {
      throw new TypeError(
        'Expected an array of objects with value-property holding a positive number or an array of positive numbers.'
      )
    }
  }

  static validateObject (data) {
    return typeof data === 'object' && !Array.isArray(data) && data !== null
  }
}
