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
 * @export
 * @class ChartDrawer
 */
export class ChartDrawer {
  /**
   * @type {StatsCollection}
   */
  #collectionOfData

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
  constructor(listOfData) {
    this.#collectionOfData = new StatsCollection(listOfData)
  }

  /**
   * Append a circle-chart to the DOM.
   *
   * @param {string} elementId - Name of the id-attribut on DOM element to append chart in.
   * @param {object} options - Options for the chart-drawing.
   * @throws {TypeError} - If options-argument is not an object.
   */
  drawCircleChart(elementId, options = {}) {
    const optionsObject = this.#populateOptionsObject(options)
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
    }
  }
}
