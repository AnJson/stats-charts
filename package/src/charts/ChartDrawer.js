/**
 * The ChartDrawer class.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { Validator } from '../helpers/Validator.js'
import { StatsCollection } from '../stats/StatsCollection.js'
import './lib/Chart/index.js'

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
  #validator = new Validator()

  constructor (listOfData) {
    this.#statsCollection = new StatsCollection(listOfData)
  }

  /**
   * Append a pie-chart to the DOM by querying the DOM for element by id.
   *
   * @param {string} elementId - Name of the id-attribut on DOM element to append chart. (E.g 'the-element', not '#the-element).
   * @param {object} options - Options for the chart-drawing.
   * @throws {TypeError} - If options-argument is not an object.
   * @throws {Error} - If no DOM-element is found.
   */
  appendPieChart (elementId, options = {}) {
    const optionsObject = this.#populateOptionsObject(options)
    const domElement = this.#querySelectDOMElement(elementId)
    const chartElement = document.createElement('anjson-chart')
    domElement.appendChild(chartElement)
    chartElement.createPieChart(this.#statsCollection, optionsObject)
  }

  /**
   * Append a bar-chart to the DOM by querying the DOM for element by id.
   *
   * @param {string} elementId - Name of the id-attribut on DOM element to append chart in. (E.g 'the-element', not '#the-element).
   * @param {object} options - Options for the chart-drawing.
   * @throws {TypeError} - If options-argument is not an object.
   * @throws {Error} - If no DOM-element is found.
   */
  appendBarChart (elementId, options = {}) {
    const optionsObject = this.#populateOptionsObject(options)
    const domElement = this.#querySelectDOMElement(elementId)
    const chartElement = document.createElement('anjson-chart')
    domElement.appendChild(chartElement)
    chartElement.createBarChart(this.#statsCollection, optionsObject)
  }

  /**
   * Query select a single element in the dom by id.
   *
   * @param {string} id - Value of the id-property for an element in the DOM.
   * @throws {Error} - If no DOM-element is found.
   * @returns {Element} - The selected DOM-element if found.
   */
  #querySelectDOMElement (id) {
    this.#validator.verifyElementInDOM(`#${id}`)
    const domElement = document.querySelector(`#${id}`)

    return domElement
  }

  /**
   * Populate an options-object with entered options and default values.
   *
   * @param {object} options - Options to add to the options-object.
   * @returns {object} - Options-object populated with entered options and default values.
   */
  #populateOptionsObject (options) {
    this.#validator.validateObject(options)

    return {
      title: (options.title !== undefined) && (typeof options.title === 'boolean') ? options.title : false,
      average: (options.average !== undefined) && (typeof options.average === 'boolean') ? options.average : false,
      percent: (options.percent !== undefined) && (typeof options.percent === 'boolean') ? options.percent : false,
      value: (options.value !== undefined) && (typeof options.value === 'boolean') ? options.value : false
    }
  }
}
