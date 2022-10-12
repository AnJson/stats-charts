/**
 * Custom chart element.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { StatsCollection } from '../../../stats/StatsCollection.js'
import '../chart-canvas/index.js'
import { COLORS } from '../constants/colors.js'
import '../meta-data/index.js'
import '../meta-bar/index.js'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      font-size: 10px;
    }

    #meta-container {
      margin-top: 2em;
    }
  </style>
  <anjson-chart-canvas id="canvas"></anjson-chart-canvas>
  <div id="meta-container"></div>
`

customElements.define(
  'anjson-chart',
  /**
   * Class to define custom element.
   *
   */
  class extends HTMLElement {
    /**
     * The custom canvas-element.
     *
     * @type {HTMLElement}
     */
    #canvasElement

    /**
     * The div to append the custom meta-bar element.
     *
     * @type {HTMLDivElement}
     */
    #metaContainerElement

    /**
     * Create instance of class and attach open shadow-dom.
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#canvasElement = this.shadowRoot.querySelector('#canvas')
      this.#metaContainerElement = this.shadowRoot.querySelector('#meta-container')
    }

    /**
     * Attribute-names to observe and react on.
     *
     * @readonly
     * @static
     * @returns {string[]} - Array of attribute-names.
     */
    static get observedAttributes () {
      return ['type']
    }

    /**
     * Send data to chart-canvas to draw a pie-chart in canvas and display optional meta-data.
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     * @param {object} options - Options-object.
     */
    createPieChart (statsCollection, options) {
      if (options?.title || options?.percent || options?.value) {
        this.#appendMetaBar(statsCollection, options)
      }

      this.#canvasElement.drawPieChart(statsCollection)
    }

    /**
     * Send data to chart-canvas to draw a bar-chart in canvas and display optional meta-data.
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     * @param {object} options - Options-object.
     */
    createBarChart (statsCollection, options) {
      if (options?.title || options?.percent || options?.value) {
        this.#appendMetaBar(statsCollection, options)
      }

      this.#canvasElement.drawBarChart(statsCollection, options.average)
    }

    /**
     * Append custom meta-bar element to shadow-dom.
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     * @param {object} options - Options-object.
     */
    async #appendMetaBar (statsCollection, options) {
      const metaBarElement = document.createElement('anjson-meta-bar')
      const metaDataElements = await this.#generateMetaDataElements(statsCollection.getCollectionOfDataWithPercent(), options)

      for (const element of metaDataElements) {
        metaBarElement.appendChild(element)
      }

      this.#metaContainerElement.appendChild(metaBarElement)
    }

    /**
     * Append custom meta-bar element to shadow-dom.
     *
     * @param {object[]} dataCollection - Collection of data from StatsCollection, including the percent-property.
     * @param {object} options - Options-object.
     * @returns {HTMLElement[]} - Array of custom anjson-meta-data elements.
     */
    async #generateMetaDataElements (dataCollection, options) {
      const metaDataElements = []

      for (const [index, data] of dataCollection.entries()) {
        const metaDataElement = document.createElement('anjson-meta-data')
        metaDataElement.setAttribute('color', COLORS[index])
        options.title && data.title ? metaDataElement.setAttribute('title', data.title) : metaDataElement.removeAttribute('title')
        options.value && data.value ? metaDataElement.setAttribute('value', data.value) : metaDataElement.removeAttribute('value')
        options.percent && data.percent ? metaDataElement.setAttribute('percent', data.percent) : metaDataElement.removeAttribute('percent')

        metaDataElements.push(metaDataElement)
      }

      return metaDataElements
    }
  }
)
