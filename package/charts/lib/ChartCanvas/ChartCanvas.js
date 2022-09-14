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
     * NOTE: ...
     *
     * @param {number[] | object[]} dataCollection - Collection of data from StatsCollection.
     */
    drawPieChart (dataCollection) {
      // TODO: Implement this.
      console.log(dataCollection)
    }

    /**
     * Paint all elements in elementsOnDisplay-field on the canvas as long as there is any.
     *
     */
    #paintCanvas () {
      this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
      // this.#ctx.shadowColor = '#000'
      // this.#ctx.shadowBlur = 5

      // TODO: Draw on canvas.

      requestAnimationFrame(this.#paintCanvas.bind(this))
    }
  }
)
