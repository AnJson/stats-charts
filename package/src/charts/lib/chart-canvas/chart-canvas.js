import { StatsCollection } from '../../../stats/StatsCollection.js'
import { COLORS } from '../constants/colors.js'

/**
 * Custom chart-canvas element.
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
  class extends HTMLElement {
    /**
     * @type {HTMLElement}
     */
    #canvas

    /**
     * @type {object}
     */
    #canvasContext

    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#addShadowRootReferencesToClass()
    }

    #addShadowRootReferencesToClass () {
      this.#canvas = this.shadowRoot.querySelector('#canvas')
      this.#canvasContext = this.#canvas.getContext('2d')
    }

    /**
     * Set the width and height-attributes for the canvas-element when mounted in DOM.
     */
    connectedCallback () {
      this.#setWidthAndHeightOnCanvas()
    }

    #setWidthAndHeightOnCanvas () {
      this.#canvas.setAttribute('width', this.offsetWidth)
      this.#canvas.setAttribute('height', this.offsetHeight)
    }

    /**
     * Draw pie-chart on the canvas.
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     */
    drawPieChart (statsCollection) {
      const { xAxisCenterPoint, yAxisCenterPoint } = this.#getCanvasMeta()
      const sum = statsCollection.getSumOfCollection()
      this.#drawPieChartOnCanvas(statsCollection, xAxisCenterPoint, yAxisCenterPoint, sum)
    }

    /**
     * Get canvas metadata, used to specify centerpoint for drawing circle(pie-chart).
     *
     * @returns {object} - Object with the canvas y- and x-axis center-points.
     */
    #getCanvasMeta () {
      const yAxisCenterPoint = this.offsetHeight / 2
      const xAxisCenterPoint = this.offsetWidth / 2

      return {
        yAxisCenterPoint,
        xAxisCenterPoint
      }
    }

    #drawPieChartOnCanvas (statsCollection, xCenterPoint, yCenterPoint, sum) {
      let currentAngle = 0
      const chartRadius = this.offsetHeight / 2

      // Paint the pie-chart on the canvas.
      for (const [index, data] of statsCollection.collectionOfData.entries()) {
        // Calculating the angle the slice will take in the chart.
        const sliceAngle = (this.#getValue(data) / sum) * 2 * Math.PI

        // Drawing an arc and a line to the center to differentiate the slice from the rest
        this.#canvasContext.beginPath()
        this.#canvasContext.arc(xCenterPoint, yCenterPoint, chartRadius, currentAngle, currentAngle + sliceAngle)
        currentAngle += sliceAngle
        this.#canvasContext.lineTo(xCenterPoint, yCenterPoint)

        // Filling the slice with the corresponding color.
        this.#canvasContext.fillStyle = COLORS[index]
        this.#canvasContext.fill()
      }
    }

    /**
     * Draw bar-chart on the canvas.
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     * @param {boolean} showAverage - Optionally show averege in the chart.
     */
    drawBarChart (statsCollection, showAverage) {
      const { barWidth, gapWidth } = this.#getBarAndGapWidth(statsCollection)
      this.#drawBarChartOnCanvas(statsCollection, barWidth, gapWidth)

      if (showAverage) {
        this.#drawAveragelineOnCanvas(statsCollection)
      }
    }

    /**
     * Calculate width of bars and gaps based on number of bars and the width of the canvas.
     *
     * @param {StatsCollection} statsCollection - StatsCollection-object.
     * @returns {object} - Object with barWidth and gapWidth.
     */
    #getBarAndGapWidth (statsCollection) {
      const numberOfData = statsCollection.collectionOfData.length
      const maximumBarWidth = 70
      const maximumGapWidth = 10

      let barWidth = (this.offsetWidth / numberOfData)

      if (barWidth > maximumBarWidth) {
        barWidth = maximumBarWidth
      }

      let gapWidth = this.offsetWidth - (barWidth * (numberOfData - 1))

      if (gapWidth > maximumGapWidth) {
        gapWidth = maximumGapWidth
      }

      barWidth -= gapWidth

      return {
        barWidth,
        gapWidth
      }
    }

    #drawBarChartOnCanvas (statsCollection, barWidth, gapWidth) {
      let xPosition = 0

      // Filling the Rectangle based on the input values
      for (const [index, data] of statsCollection.collectionOfData.entries()) {
        const barHeight = this.offsetHeight * (this.#getValue(data) / statsCollection.getMaximumValue())
        this.#canvasContext.fillStyle = COLORS[index]
        this.#canvasContext.fillRect(xPosition, (this.offsetHeight - barHeight), barWidth, barHeight)
        xPosition += barWidth + gapWidth
      }
    }

    #drawAveragelineOnCanvas (statsCollection) {
      const yIndexOfAverage = this.offsetHeight - (this.offsetHeight * (statsCollection.getAverageValue() / statsCollection.getMaximumValue()))
      this.#canvasContext.lineWidth = 1
      this.#canvasContext.moveTo(0, yIndexOfAverage)
      this.#canvasContext.setLineDash([6, 6])
      this.#canvasContext.lineTo(this.offsetWidth, yIndexOfAverage)
      this.#canvasContext.stroke()
    }

    #getValue (data) {
      let value
      if (typeof data === 'object') {
        value = data.value
      } else {
        value = data
      }

      return value
    }
  }
)
