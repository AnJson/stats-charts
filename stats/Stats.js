/**
 * The Stats class.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */

import { Validator } from "../helpers/Validator"

const validator = new Validator()

/**
 * Wrapper class for stats-methods.
 *
 * @export
 * @class Stats
 */
export class Stats {
  #collectionOfData = []

  /**
   * The constructor of the class.
   *
   * @param {number[] | object[]} listOfData - The list of data to get stats from.
   * @throws {TypeError} - If argument is not an array of objects with value-property or an array of numbers.
   */
  constructor (listOfData) {
    if (!validator.isAllNumbersOrObjectsWithValueProperty(listOfData)) {
      throw new TypeError('Expected argument to be an array of objects with value-property or an array of numbers.')
    }

    this.#collectionOfData = [ ...collectionOfData ]
  }

  /**
   * Get a copy of the collectionOfData-field converted to objects with percent-property.
   *
   * @returns {object[]} - Data from collectionOfData-field converted to objects with percent-property.
   */
  getCollectionOfDataWithPercent () {
    const percentCollection = []
    const sumOfCollection = this.#getSumOfCollectionOfData()

    for (const data of this.#collectionOfData) {
      const dataObject = this.#convertToObjectWithPercentProperty(data)
      dataObject.percent = (dataObject.value / sumOfCollection)
    }

    return percentCollection
  }

  /**
   * Create an object with at least a value- and percent-property.
   *
   * @param {object | number} data - Single data from collectionOfData-field.
   * @returns {object} - Object with at least a value- and percent-property.
   */
  #convertToObjectWithPercentProperty (data) {
    let dataObjectWithPercentProperty
    if (this.#isObjectWithValueProperty(data)) {
      dataObjectWithPercentProperty = { ...data, percent: undefined }
    } else {
      dataObjectWithPercentProperty = { value: data, percent: undefined }
    }

    return dataObjectWithPercentProperty
  }

  /**
   * Get the sum of the values in the collectionOfData-field.
   *
   * @returns {number} - The sum of the values in the collectionOfData-field.
   */
  #getSumOfCollectionOfData () {
    const sum = this.#collectionOfData.reduce(previousData, currentData => {
      if (this.#isObjectWithValueProperty(currentData)) {
        return previousData + currentData.value
      } else {
        return previousData + currentData
      }
    }, 0)

    return sum
  }
}
