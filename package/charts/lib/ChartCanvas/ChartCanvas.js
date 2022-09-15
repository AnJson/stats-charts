import { StatsCollection } from '../../../stats/StatsCollection/'
import { COLORS } from './lib/colors.js'

/**
 * Custom canvas element.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      font-size: 10px;
    }

    #canvas {
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      aspect-ratio: 16 / 9;
    }
  </style>
  <canvas id="canvas"></canvas>
`

customElements.define(
  'anjson-chart-canvas',
  /**
   * Class to define custom element.
   *
   */
  class extends HTMLElement {
    /**
     * The canvas-element.
     *
     * @type {HTMLElement}
     */
    #canvas

    /**
     * The context-object.
     *
     * @type {object}
     */
    #ctx

    /**
     * Create instance of class and attach open shadow-dom.
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#canvas = this.shadowRoot.querySelector('#canvas')
      this.#ctx = this.#canvas.getContext('2d')
    }

    /**
     * Set the width and height-attributes for the canvas-element when mounted in DOM.
     *
     */
    connectedCallback () {
      this.#setWidthAndHeightOnCanvas()
    }

    /**
     * NOTE: ...
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     */
    drawPieChart (statsCollection) {
      const { xAxisCenterPoint, yAxisCenterPoint, chartRadius } = this.#getCanvasMeta()
      let currentAngle = 0
      const sum = statsCollection.getSumOfCollection()

      // Paint the pie-chart on the canvas.
      for (const [index, data] of statsCollection.collectionOfData.entries()) {
        // Calculating the angle the slice will take in the chart.
        const sliceAngle = (this.#getValue(data) / sum) * 2 * Math.PI

        // Drawing an arc and a line to the center to differentiate the slice from the rest
        this.#ctx.beginPath()
        this.#ctx.arc(xAxisCenterPoint, yAxisCenterPoint, chartRadius, currentAngle, currentAngle + sliceAngle)
        currentAngle += sliceAngle
        this.#ctx.lineTo(xAxisCenterPoint, yAxisCenterPoint)

        // Filling the slice with the corresponding color.
        this.#ctx.fillStyle = COLORS[index]
        this.#ctx.fill()
      }
    }

    /**
     * Get canvas metadata.
     *
     * @returns {object} - Object with the canvas y- and x-axis center-points and the chartRadius.
     */
    #getCanvasMeta () {
      const yAxisCenterPoint = this.offsetHeight / 2
      const xAxisCenterPoint = this.offsetWidth / 2
      const chartRadius = this.offsetHeight / 2

      return {
        yAxisCenterPoint,
        xAxisCenterPoint,
        chartRadius
      }
    }

    /**
     * Get the value from single data in collectionOfData.
     *
     * @param {number | object} data - Data from collectionOfData.
     * @returns {number} - The value in the specific data.
     */
    #getValue (data) {
      let value
      if (typeof data === 'object') {
        value = data.value
      } else {
        value = data
      }

      return value
    }

    /**
     * Paint all elements in elementsOnDisplay-field on the canvas as long as there is any.
     *
     */
    #setWidthAndHeightOnCanvas () {
      this.#canvas.setAttribute('width', this.offsetWidth)
      this.#canvas.setAttribute('height', this.offsetHeight)
    }
  }
)
