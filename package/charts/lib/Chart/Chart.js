/**
 * Custom chart element.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import '../ChartCanvas/'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      font-size: 10px;
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
     * @param {number[] | object[]} dataCollection - Collection of data from StatsCollection.
     * @param {object} options - Options-object.
     */
    createPieChart (dataCollection, options) {
      if (options?.title || options?.percent || options?.value) {
        this.#appendMetaBar(options)
      }

      this.#canvasElement.drawPieChart(dataCollection)
    }

    /**
     * Append custom meta-bar element to shadow-dom.
     *
     * @param {object} options - Options-object.
     */
    async #appendMetaBar (options) {
      const metaBarElement = await this.#createMetaBarElement()
      // TODO: Add data to display based on options.

      this.#metaContainerElement.appendChild(metaBarElement)
    }

    /**
     * Import and create custom meta-bar element.
     *
     * @returns {HTMLElement} - Custom anjson-meta-bar element.
     */
    async #createMetaBarElement () {
      await import(/* @vite-ignore */'../MetaBar/')

      return document.createElement('anjson-meta-bar')
    }
  }
)
