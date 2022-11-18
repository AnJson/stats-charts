/**
 * Validator class.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

export class Validator {
  static validateObjectWithNumberInValueProperty (data) {
    const isValid = (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      Object.keys(data).includes('value') &&
      this.isNumber(data.value)
    )

    if (!isValid) {
      throw new TypeError('Expected an object with value-property holding a positive number.')
    }
  }

  static validateNumber (data) {
    const isValid = typeof data === 'number' && !Number.isNaN(data)

    if (!isValid) {
      throw new TypeError('Expected a number.')
    }
  }

  static validateValidStatsArray (datalist) {
    const isValid = (
      Array.isArray(datalist) &&
      (datalist.every((data) => this.isObjectWithNumberInValueProperty(data)) ||
        datalist.every((data) => this.isNumber(data)))
    )

    if (!isValid) {
      throw new TypeError('Expected an array with numbers or an array of objects with value-property holding a positive number.')
    }
  }

  static validateObject (data) {
    const isValid = typeof data === 'object' && !Array.isArray(data)

    if (!isValid) {
      throw new TypeError('Expected an object.')
    }
  }
}
