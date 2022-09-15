/**
 * The ChartDrawer class.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { Validator } from '../helpers/Validator.js'
import { StatsCollection } from '../stats/StatsCollection.js'

/**
 * Wrapper class for chart-drawing methods.
 *
 * @class ChartDrawer
 */
export class ChartDrawer {
  /**
   * @type {StatsCollection}
   */
  #statsCollection

  /**
   * @type {Validator}
   */
  #validator = new Validator()

  /**
   * The constructor of the class.
   *
   * @param {number[] | object[]} listOfData - The list of data to draw charts from.
   * @throws {TypeError} - If argument is not an array of objects with value-property holding a number or an array of numbers.
   */
  constructor (listOfData) {
    this.#statsCollection = new StatsCollection(listOfData)
  }

  /**
   * Append a pie-chart to the DOM.
   *
   * @param {string} elementId - Name of the id-attribut on DOM element to append chart in.
   * @param {object} options - Options for the chart-drawing.
   * @throws {TypeError} - If options-argument is not an object.
   * @throws {Error} - If no DOM-element is found.
   */
  async drawPieChart (elementId, options = {}) {
    const optionsObject = this.#populateOptionsObject(options)
    const domElement = document.querySelector(`#${elementId}`)

    if (!domElement) {
      throw new Error('No element found in the DOM.')
    }

    const chartElement = await this.#createChartElement()
    domElement.appendChild(chartElement)
    chartElement.createPieChart(this.#statsCollection, optionsObject)
  }

  /**
   * Populate an options-object with entered options and default values.
   *
   * @param {object} options - Options to add to the options-object.
   * @returns {object} - Options-object populated with entered options and default values.
   */
  #populateOptionsObject (options) {
    if (!this.#validator.isObject(options)) {
      throw new TypeError('Expected an object as option-argument.')
    }
    return {
      title: (options.title !== undefined) && (typeof options.title === 'boolean') ? options.title : false,
      averege: (options.averege !== undefined) && (typeof options.averege === 'boolean') ? options.averege : false,
      percent: (options.percent !== undefined) && (typeof options.percent === 'boolean') ? options.percent : false,
      value: (options.value !== undefined) && (typeof options.value === 'boolean') ? options.value : false
    }
  }

  /**
   * Import and create custom chart element.
   *
   * @returns {HTMLElement} - Custom anjson-chart element.
   */
  async #createChartElement () {
    await import(/* @vite-ignore */'./lib/Chart/')

    return document.createElement('anjson-chart')
  }
}
