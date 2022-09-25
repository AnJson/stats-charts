/**
 * The StatsCollection class.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

import { Validator } from '../helpers/Validator.js'

/**
 * Wrapper class for stats-methods.
 *
 * @class StatsCollection
 */
export class StatsCollection {
  /**
   * @type {number[] | object[]}
   */
  #collectionOfData

  /**
   * @type {Validator}
   */
  #validator = new Validator()

  /**
   * The constructor of the class.
   *
   * @param {number[] | object[]} listOfData - The list of data to get stats from.
   */
  constructor (listOfData) {
    this.collectionOfData = listOfData
  }

  /**
   * Get a copy of the collectionOfData.
   *
   * @readonly
   * @returns {number[] | object[]} - Copy of the collectionOfData-field.
   */
  get collectionOfData () {
    const collectionOfDataCopy = []

    for (const data of this.#collectionOfData) {
      collectionOfDataCopy.push(this.#copyData(data))
    }

    return collectionOfDataCopy
  }

  /**
   * Set the collectionOfData-field.
   *
   * @throws {TypeError} - If argument is not an array of objects with value-property or an array of numbers.
   */
  set collectionOfData (listOfData) {
    if (!this.#validator.isValidStatsArray(listOfData)) {
      throw new TypeError(
        'Expected argument to be an array of objects with value-property holding a positive number or an array of positive numbers.'
      )
    }

    const listOfDataCopy = []

    for (const data of listOfData) {
      listOfDataCopy.push(this.#copyData(data))
    }

    this.#collectionOfData = listOfDataCopy
  }

  /**
   * Get the minimum value in the collectionOfData-field.
   *
   * @returns {number} - Collection of data from collectionOfData-field wich has the lowest value.
   */
  getMinimumValue () {
    return this.#collectionOfData.reduce(
      (previousData, currentData) =>
        this.#getValue(previousData) < this.#getValue(currentData)
          ? this.#getValue(previousData)
          : this.#getValue(currentData)
    )
  }

  /**
   * Get the maximum value in the collectionOfData-field.
   *
   * @returns {number} - Collection of data from collectionOfData-field wich has the highest value.
   */
  getMaximumValue () {
    return this.#collectionOfData.reduce(
      (previousData, currentData) =>
        this.#getValue(previousData) > this.#getValue(currentData)
          ? this.#getValue(previousData)
          : this.#getValue(currentData)
    )
  }

  /**
   * Get the array of data that has the highest value in the collectionOfData-field.
   *
   * @returns {object[] | number[]} - Collection of data from collectionOfData-field wich has the highest value.
   */
  getDataWithMaximumValues () {
    return this.#collectionOfData.filter(
      (data) => this.#getValue(data) === this.getMaximumValue()
    )
  }

  /**
   * Get the array of data that has the lowest value in the collectionOfData-field.
   *
   * @returns {object[] | number[]} - Collection of data from collectionOfData-field wich has the lowest value.
   */
  getDataWithMinimumValues () {
    return this.#collectionOfData.filter(
      (data) => this.#getValue(data) === this.getMinimumValue()
    )
  }

  /**
   * Calculate the average-value from the collection of data.
   *
   * @returns {number} - The calculated average value.
   */
  getAverageValue () {
    let sum = 0

    for (const data of this.#collectionOfData) {
      sum += this.#getValue(data)
    }

    return sum / this.#collectionOfData.length
  }

  /**
   * Get a copy of the collectionOfData-field converted to objects with percent-property.
   *
   * @returns {object[]} - Data from collectionOfData-field converted to objects with percent-property.
   */
  getCollectionOfDataWithPercent () {
    const percentCollection = []
    const sumOfCollection = this.getSumOfCollection()

    for (const data of this.#collectionOfData) {
      const dataObject = this.#convertToObjectWithPercentProperty(data)
      dataObject.percent = dataObject.value / sumOfCollection
      percentCollection.push(dataObject)
    }

    return percentCollection
  }

  /**
   * Get the sum of the values in the collectionOfData-field.
   *
   * @returns {number} - The sum of the values in the collectionOfData-field.
   */
  getSumOfCollection () {
    const sum = this.#collectionOfData.reduce(
      (previousData, currentData) => previousData + this.#getValue(currentData),
      0
    )

    return sum
  }

  /**
   * Get a copy from single data in the collectionOfData-field.
   *
   * @param {number | object} data - Data to copy from the collectionOfData-field.
   * @returns {number | object} - A copy of the data in collectionOfData-field.
   */
  #copyData (data) {
    let dataCopy

    if (this.#validator.isObjectWithPositiveNumberInValueProperty(data)) {
      dataCopy = { ...data }
    } else {
      dataCopy = data
    }

    return dataCopy
  }

  /**
   * Create an object with at least a value- and percent-property.
   *
   * @param {object | number} data - Single data from collectionOfData-field.
   * @returns {object} - Object with at least a value- and percent-property.
   */
  #convertToObjectWithPercentProperty (data) {
    let dataObjectWithPercentProperty
    if (this.#validator.isObjectWithPositiveNumberInValueProperty(data)) {
      dataObjectWithPercentProperty = { ...data, percent: undefined }
    } else {
      dataObjectWithPercentProperty = { value: data, percent: undefined }
    }

    return dataObjectWithPercentProperty
  }

  /**
   * Get a single value from the collectionOfData-field even if it is an object or a number.
   *
   * @param {object | number} data - Data from the collectionOfData-field to get the value from.
   * @returns {number} - The sum of the values in the collectionOfData-field.
   */
  #getValue (data) {
    let value

    if (this.#validator.isObjectWithPositiveNumberInValueProperty(data)) {
      value = data.value
    } else {
      value = data
    }

    return value
  }
}
