/**
 * Custom chart element.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import '../ChartCanvas'
import '../MetaBar'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      font-size: 10px;
    }

    #canvas-container {
      width: 20em;
    }
  </style>
  <div id="canvas-container">
    <anjson-chart-canvas></anjson-chart-canvas>
    <anjson-meta-bar></anjson-meta-bar>
  </div>
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
     * Create instance of class and attach open shadow-dom.
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )
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
  }
)
