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
  </style>
  <div id="container">
    <h1>meta-data</h1>
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
     * Attributes to observe.
     *
     * @returns {string[]} - Name of attributes to observe.
     */
    static get observedAttributes () {
      return ['title', 'value', 'percent']
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
  }
)
