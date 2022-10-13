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
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
    }

    #color-box {
      width: 15px;
      height: 15px;
      border-radius: 2px;
    }

    .hidden {
      display: none;
    }
  </style>
  <div id="container">
    <div id="color-box" class="hidden"></div>
    <div id="title" class="hidden"></div>
    <div id="value" class="hidden"></div>
    <div id="percent" class="hidden"></div>
  </div>
`

customElements.define(
  'anjson-meta-data',
  class extends HTMLElement {
    #colorBoxElement
    #titleElement
    #valueElement
    #percentElement

    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      this.#colorBoxElement = this.shadowRoot.querySelector('#color-box')
      this.#titleElement = this.shadowRoot.querySelector('#title')
      this.#valueElement = this.shadowRoot.querySelector('#value')
      this.#percentElement = this.shadowRoot.querySelector('#percent')
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

    #triggerCallback (name, value) {
      if (name === 'color') {
        this.#handleStateOfColor(value)
      }

      if (name === 'title') {
        this.#handleStateOfTitle(value)
      }

      if (name === 'value') {
        this.#handleStateOfValue(value)
      }

      if (name === 'percent') {
        this.#handleStateOfPercent(value)
      }
    }

    #handleStateOfColor (hexColor) {
      if (this.hasAttribute('color')) {
        this.#colorBoxElement.classList.remove('hidden')
        this.#colorBoxElement.style.backgroundColor = hexColor
      } else {
        this.#colorBoxElement.classList.add('hidden')
      }
    }

    #handleStateOfTitle (title) {
      if (this.hasAttribute('title')) {
        this.#titleElement.classList.remove('hidden')
        this.#titleElement.textContent = title
      } else {
        this.#titleElement.textContent = ''
        this.#titleElement.classList.add('hidden')
      }
    }

    #handleStateOfValue (value) {
      if (this.hasAttribute('value')) {
        this.#valueElement.classList.remove('hidden')
        this.#valueElement.textContent = value
      } else {
        this.#valueElement.textContent = ''
        this.#valueElement.classList.add('hidden')
      }
    }

    #handleStateOfPercent (value) {
      if (this.hasAttribute('percent')) {
        this.#percentElement.classList.remove('hidden')
        this.#percentElement.textContent = `(${Number.parseFloat(value * 100).toFixed(1)}%)`
      } else {
        this.#percentElement.textContent = ''
        this.#percentElement.classList.add('hidden')
      }
    }
  }
)
