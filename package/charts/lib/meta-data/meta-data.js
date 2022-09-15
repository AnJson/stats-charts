/**
 * Custom meta-data element.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      display: block;
      font-size: 10px;
    }

    #container {
      
    }

    #color-box {
      width: 15px;
      height: 15px;
      border-radius: 2px;
    }
  </style>
  <div id="container">
    <div id="color-box"></div>

  </div>
`

customElements.define(
  'anjson-meta-data',
  /**
   * Class to define custom element.
   *
   */
  class extends HTMLElement {
    /**
     * Div element showing the color.
     *
     * @type {HTMLElement}
     */
    #colorBoxElement

    /**
     * Create instance of class and attach open shadow-dom.
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#colorBoxElement = this.shadowRoot.querySelector('#color-box')
    }

    /**
     * Attributes to observe.
     *
     * @returns {string[]} - Name of attributes to observe.
     */
    static get observedAttributes () {
      return ['color', 'title', 'value', 'percent']
    }

    /**
     * Handler for observed attributes.
     *
     * @param {string} name - Name of the modified attribute.
     * @param {*} oldVal - Value before modification.
     * @param {*} newVal - Value after modification.
     */
    attributeChangedCallback (name, oldVal, newVal) {
      if (oldVal !== newVal) {
        this.#triggerCallback(name, newVal)
      }
    }

    /**
     * Trigger callback based on the name of the attribute.
     *
     * @param {string} name - The name of the attribute.
     * @param {string} value - The value of the given attribute.
     */
    #triggerCallback (name, value) {
      if (name === 'color') {
        this.#colorizeBox(value)
      }

      if (name === 'title') {
        // NOTE: Fix.
        console.log(value)
      }

      if (name === 'value') {
        // NOTE: Fix.
        console.log(value)
      }

      if (name === 'percent') {
        // NOTE: Fix.
        console.log(value)
      }
    }

    /**
     * Set the background-color of the colorbox.
     *
     * @param {string} hexColor - Color-code in hexadecimals.
     */
    #colorizeBox (hexColor) {
      this.#colorBoxElement.style.backgroundColor = hexColor
    }
  }
)
