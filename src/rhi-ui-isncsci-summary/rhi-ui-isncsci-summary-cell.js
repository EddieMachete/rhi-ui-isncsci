import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export class RhiUiIsncsciSummaryCell extends PolymerElement {
  static get properties(){
    return {
      label: String,
      value: String
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <style>
        :host{
          display: block;
        }
        span{
          margin-left: 20px;
        }
      </style>
      <label>[[label]]</label><span>[[value]]</span>
    `;
  }
}
customElements.define('rhi-ui-isncsci-summary-cell', RhiUiIsncsciSummaryCell);