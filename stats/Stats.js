/**
 * The Stats class.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */

import { Validator } from '../helpers/Validator.js'

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
    if (!validator.isValidStatsArray(listOfData)) {
      throw new TypeError('Expected argument to be an array of objects with value-property holding a number or an array of numbers.')
    }

    this.#collectionOfData = [ ...listOfData ]
  }

  /**
   * Get the array of data that has the highest value in the collectionOfData-field.
   *
   * @returns {object[] | number[]} - Collection of data from collectionOfData-field wich has the highest value.
   */
  getDataWithMaximumValues () {
    // TODO: Remember to reflect this to implement DRY.
    const maximumValue = this.#collectionOfData.reduce((acc, current) => acc > this.#getValue(current) ? acc : this.#getValue(current))
    return this.#collectionOfData.filter(data => this.#getValue(data) === maximumValue)
  }

  /**
   * Calculate the averege-value from the collection of data.
   *
   * @returns {number} - The calculated averege value.
   */
  getAveregeValue () {
    let sum = 0
    // TODO: Remember to reflect this to implement DRY.

    for (const data of this.#collectionOfData) {
      sum += this.#getValue(data)
    }

    return (sum / this.#collectionOfData.length)
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
      percentCollection.push(dataObject)
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
    if (validator.isObjectWithNumberInValueProperty(data)) {
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
    const sum = this.#collectionOfData.reduce((previousData, currentData) => previousData + this.#getValue(currentData), 0)
    // TODO: Remember to reflect this refactoring to implement DRY.
    return sum
  }

  /**
   * Get a single value from the collectionOfData-field even if it is an object or a number.
   *
   * @param {object | number} - Data from the collectionOfData-field to get the value from.
   * @returns {number} - The sum of the values in the collectionOfData-field.
   */
  #getValue (data) {
    let value

    if (validator.isObjectWithNumberInValueProperty(data)) {
      value = data.value
    } else {
      value = data
    }

    return value
  }
}
