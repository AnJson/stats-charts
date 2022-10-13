/**
 * Validator class.
 *
 * @author Anders Jonsson
 * @version 2.0.0
 */

export class Validator {
  validateObjectWithPositiveNumberInValueProperty (data) {
    const isValid = this.#isObjectWithPositiveNumberInValueProperty(data)

    if (!isValid) {
      throw new TypeError('Expected an object with value-property holding a positive number.')
    }
  }

  #isObjectWithPositiveNumberInValueProperty (data) {
    return (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      Object.keys(data).includes('value') &&
      this.#isPositiveNumber(data.value)
    )
  }

  validatePositiveNumber (data) {
    const isValid = this.#isPositiveNumber(data)

    if (!isValid) {
      throw new Error('Expected a positive number.')
    }
  }

  #isPositiveNumber (data) {
    return (typeof data === 'number' && !Number.isNaN(data) && data >= 0)
  }

  validateValidStatsArray (datalist) {
    const isValid = this.#isValidStatsArray(datalist)

    if (!isValid) {
      throw new TypeError(
        'Expected an array of objects with value-property holding a positive number or an array of positive numbers.'
      )
    }
  }

  #isValidStatsArray (datalist) {
    return (
      Array.isArray(datalist) &&
      (datalist.every((data) => this.#isObjectWithPositiveNumberInValueProperty(data)) ||
        datalist.every((data) => this.#isPositiveNumber(data)))
    )
  }

  validateObject (data) {
    const isValid = this.#isObject(data)

    if (!isValid) {
      throw new TypeError('Expected an object.')
    }
  }

  #isObject (data) {
    return (typeof data === 'object' && !Array.isArray(data) && data !== null)
  }

  verifyElementInDOM (cssIdSelector) {
    const isInDOM = this.#isInDOM(cssIdSelector)

    if (!isInDOM) {
      throw new Error('No element found in the DOM.')
    }
  }

  #isInDOM (idSelector) {
    return document.querySelector(idSelector) !== undefined
  }
}
