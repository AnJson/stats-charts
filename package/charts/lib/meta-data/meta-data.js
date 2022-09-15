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
  }
)
