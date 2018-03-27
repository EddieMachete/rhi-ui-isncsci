'use strict';
import { html, render } from "../../helpers/lit-html.js";

class RhiPaintButton extends HTMLElement{
  get painting(){
    return this._painting;
  }
  set painting(val){
    this._painting = val;
    this.dispatchEvent(new CustomEvent("update-painting",{
      detail:{
        painting: this._painting
      },
      bubbles: true, composed: true
    }))
  }

  get template(){
    return painting => html`
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <button>Paint (${painting})</button>
    `;
  }

  static get observedAttributes() {
    return ['painting'];
  }

  attributeChangedCallback(attrName, oldVal, newVal){
    switch (attrName) {
      case 'painting':
        this.painting = this.hasAttribute('painting');
        break;
      default:
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this._addEventListeners();

    this.painting = this.hasAttribute('painting');
    this._update();
  }

  _addEventListeners(){
    this.onclick = this._togglePainting;
    this.addEventListener("update-painting", this._update);
  }

  _togglePainting(){
    this.painting = !this._painting;
    if(this._painting){
      this.setAttribute('painting','');
    }else{
      this.removeAttribute('painting');
    }
  }

  _update(){
    render(this.template(this._painting), this.shadowRoot);
  }
}
customElements.define("rhi-paint-button", RhiPaintButton);
