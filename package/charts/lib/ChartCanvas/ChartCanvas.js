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
  <canvas id="canvas" height="200px"></canvas>
`

customElements.define(
  'anjson-circle-chart',
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
     * Set up elements-field to contain elements available to draw on canvas.
     *
     */
    connectedCallback () {}

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
     * React on changed attribute.
     *
     * @param {string} name - Name of attribute.
     * @param {string} oldVal - Attribute-value before change.
     * @param {string} newVal - Attribute-value after change.
     */
    attributeChangedCallback (name, oldVal, newVal) {
      if (oldVal !== newVal) {
        // NOTE: Type-attribute has changed.
      }
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
