/**
 * The StatsCollection class.
 *
 * @author Anders Jonsson
 * @version 1.0.1
 */

import { Validator } from '../helpers/Validator.js'

export class StatsCollection {
  /**
   * @type {number[] | object[]}
   */
  #data
  #validator = new Validator()

  constructor (listOfData) {
    this.data = listOfData
  }

  /**
   * Get a copy of the data. (this.data !== this.#data).
   *
   * @readonly
   * @returns {number[] | object[]} - Copy of the data-field.
   */
  get data () {
    return this.#getCopy(this.#data)
  }

  set data (listOfData) {
    this.#validator.validateValidStatsArray(listOfData)
    this.#data = this.#getCopy(listOfData)
  }

  #getCopy (dataList) {
    const dataCopy = []

    for (const data of dataList) {
      dataCopy.push(this.#copySingleData(data))
    }

    return dataCopy
  }

  #copySingleData (data) {
    let dataCopy
    try {
      this.#validator.validateObjectWithPositiveNumberInValueProperty(data)
      dataCopy = { ...data }
    } catch (error) {
      dataCopy = data
    }

    return dataCopy
  }

  getMinimumValue () {
    return this.#filterOutMinimumValue()
  }

  #filterOutMinimumValue () {
    return this.#data.reduce(
      (previousData, currentData) =>
        this.#getValue(previousData) < this.#getValue(currentData)
          ? this.#getValue(previousData)
          : this.#getValue(currentData)
    )
  }

  getMaximumValue () {
    return this.#filterOutMaximumValue()
  }

  #filterOutMaximumValue () {
    return this.#data.reduce(
      (previousData, currentData) =>
        this.#getValue(previousData) > this.#getValue(currentData)
          ? this.#getValue(previousData)
          : this.#getValue(currentData)
    )
  }

  /**
   * Get the array of data that has the highest value in the data-field.
   *
   * @returns {object[] | number[]} - Collection of data from data-field wich has the highest value.
   */
  getDataWithMaximumValues () {
    return this.#filterDataEqualsMaxValue()
  }

  #filterDataEqualsMaxValue () {
    return this.#data.filter(
      (data) => this.#getValue(data) === this.getMaximumValue()
    )
  }

  /**
   * Get the array of data that has the lowest value in the data-field.
   *
   * @returns {object[] | number[]} - Collection of data from data-field wich has the lowest value.
   */
  getDataWithMinimumValues () {
    return this.#filterDataEqualsMinimumValue()
  }

  #filterDataEqualsMinimumValue () {
    return this.#data.filter(
      (data) => this.#getValue(data) === this.getMinimumValue()
    )
  }

  getAverageValue () {
    return this.#getCalculatedAverege()
  }

  #getCalculatedAverege () {
    let sum = 0

    for (const data of this.#data) {
      sum += this.#getValue(data)
    }

    return sum / this.#data.length
  }

  /**
   * Get a copy of the data-field converted to objects with percent-property.
   *
   * @returns {object[]} - Data from data-field converted to objects with percent-property.
   */
  getDataWithPercent () {
    return this.#mapDataToObjectsWithPercent()
  }

  #mapDataToObjectsWithPercent () {
    const percentCollection = []
    const sumOfCollection = this.getSum()

    for (const data of this.#data) {
      const dataObject = this.#convertToObjectWithPercentProperty(data)
      dataObject.percent = dataObject.value / sumOfCollection
      percentCollection.push(dataObject)
    }

    return percentCollection
  }

  getSum () {
    return this.#getCalculatedSum()
  }

  #getCalculatedSum () {
    return this.#data.reduce(
      (previousData, currentData) => previousData + this.#getValue(currentData),
      0
    )
  }

  #convertToObjectWithPercentProperty (data) {
    let dataObjectWithPercentProperty

    try {
      this.#validator.validateObjectWithPositiveNumberInValueProperty(data)
      dataObjectWithPercentProperty = { ...data, percent: undefined }
    } catch (error) {
      dataObjectWithPercentProperty = { value: data, percent: undefined }
    }

    return dataObjectWithPercentProperty
  }

  /**
   * Get a single value from the data-field even if it is an object or a number.
   *
   * @param {object | number} data - Data from the data-field to get the value from.
   * @returns {number} - The sum of the values in the data-field.
   */
  #getValue (data) {
    let value
    try {
      this.#validator.validateObjectWithPositiveNumberInValueProperty(data)
      value = data.value
    } catch (error) {
      value = data
    }

    return value
  }
}
