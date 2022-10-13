/**
 * Custom chart element.
 *
 * @author Anders Jonsson
 * @version 1.0.1
 */
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

    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#addShadowRootReferencesToClass()
    }

    #addShadowRootReferencesToClass () {
      this.#canvasElement = this.shadowRoot.querySelector('#canvas')
      this.#metaContainerElement = this.shadowRoot.querySelector('#meta-container')
    }

    createPieChart (statsCollection, options) {
      if (this.#toShowMetadata(options)) {
        this.#appendMetaBar(statsCollection, options)
      }

      this.#canvasElement.drawPieChart(statsCollection)
    }

    createBarChart (statsCollection, options) {
      if (this.#toShowMetadata(options)) {
        this.#appendMetaBar(statsCollection, options)
      }

      this.#canvasElement.drawBarChart(statsCollection, options.average)
    }

    #toShowMetadata (options) {
      return options?.title || options?.percent || options?.value || options?.average
    }

    #appendMetaBar (statsCollection, options) {
      const metaBarElement = document.createElement('anjson-meta-bar')
      const metaDataElements = this.#generateMetaDataElements(statsCollection.getDataWithPercent(), options)

      for (const element of metaDataElements) {
        metaBarElement.appendChild(element)
      }

      this.#metaContainerElement.appendChild(metaBarElement)
    }

    #generateMetaDataElements (dataCollection, options) {
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
