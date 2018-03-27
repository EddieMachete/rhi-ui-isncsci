'use strict';
import { html, render } from "../../helpers/lit-html.js";

class RhiPropagateButton extends HTMLElement{
  get direction(){
    return this._direction;
  }
  set direction(val){
    this._direction = val;
    this.dispatchEvent(new CustomEvent("update-propagate-direction",{
      detail:{
        direction: this._direction
      },
      bubbles: true, composed: true
    }))
  }

  get template(){
    return direction => html`
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <button>Propagate (${direction})</button>
    `;
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this._addEventListeners();

    this._directions = ['none','down','up']
    this._direction = this._directions[0];
    this._update();
  }

  _addEventListeners(){
    this.onclick = this._nextDirection;
    this.addEventListener("update-propagate-direction", this._update);
  }

  _nextDirection(){
    this.direction = this._directions[(this._directions.indexOf(this._direction)+1) % this._directions.length]
  }

  _update(){
    render(this.template(this._direction), this.shadowRoot);
  }
}
customElements.define("rhi-propagate-button", RhiPropagateButton);
