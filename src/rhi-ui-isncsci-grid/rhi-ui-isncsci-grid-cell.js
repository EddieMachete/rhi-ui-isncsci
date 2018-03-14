import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
export class RhiUiIsncsciGridCell extends PolymerElement {
  static get properties(){
    return {
      value: {
        type: Number,
        notify: true
      }
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <style>
        input{
          width: 25px;
        }
      </style>
      <input value="{{value}}" type="number" on-input="onInput"/>
    `;
  }

  onInput(e){
    this.value = Number.parseInt(e.target.value);
  }
}
customElements.define('rhi-ui-isncsci-grid-cell', RhiUiIsncsciGridCell);
