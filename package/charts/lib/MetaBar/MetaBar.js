/**
 * Custom chart element.
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

    #container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
      justify-content: center;
    }
  </style>
  <div id="container">
    <div>Dutt</div>
    <div>Sådärja</div>
    <div>Mhm</div>
    <div>AHAAA</div>
    <div>TITTUT</div>
    <div>Tadaaa</div>
    <div>Långtradarchaufför</div>
    <div>Visst</div>
    <div>Vettu</div>
    <div>Nuharvimånga</div>
  </div>
`

customElements.define(
  'anjson-meta-bar',
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