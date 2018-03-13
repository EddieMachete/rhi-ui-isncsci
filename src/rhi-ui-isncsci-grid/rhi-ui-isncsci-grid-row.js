import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { DomIf } from '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
export class RhiUiIsncsciGridRow extends PolymerElement {
  constructor(){
    super();
    this._NA = "N/A";
  }

  static get properties(){
    return {
      helper: String,
      label: String,
      right: Boolean,
      left: Boolean,
      propagateDown: Boolean,
      colOne: {
        type: String,
        notify: true
      },
      colTwo: {
        type: String,
        notify: true
      },
      colThree: {
        type: String,
        notify: true
      }
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <style>
        :host{
          display:block;
        }
      </style>
      <template is="dom-if" if="{{right}}">
        <span>[[helper]]</span>
        <span>[[label]]</span>
      </template>
      <template is="dom-if" if="{{_if(colOne)}}">
        <rhi-ui-isncsci-grid-cell value="{{colOne}}"></rhi-ui-isncsci-grid-cell>
      </template>
      <template is="dom-if" if="{{_if(colTwo)}}">
        <rhi-ui-isncsci-grid-cell value="{{colTwo}}"></rhi-ui-isncsci-grid-cell>
      </template>
      <template is="dom-if" if="{{_if(colThree)}}">
        <rhi-ui-isncsci-grid-cell value="{{colThree}}"></rhi-ui-isncsci-grid-cell>
      </template>
      <template is="dom-if" if="{{left}}">
        <span>[[label]]</span>
        <span>[[helper]]</span>
      </template>
    `;
  }
  ready(){
    super.ready();
    this.addEventListener('col-one-changed', this._updateValues);
    this.addEventListener('col-two-changed', this._updateValues);
    this.addEventListener('col-three-changed', this._updateValues);
  }
  _if(col){
    return col !== null;
  }

  _updateValues(e){
    if(this.propagateDown && this.nextElementSibling != null){
      switch (e.type) {
        case 'col-one-changed':
          this.nextElementSibling.colOne = this.nextElementSibling.colOne == undefined ? undefined : this.colOne;
          break;
        case 'col-two-changed':
          this.nextElementSibling.colTwo = this.nextElementSibling.colTwo == undefined ? undefined : this.colTwo;
          break;
        case 'col-three-changed':
          this.nextElementSibling.colThree = this.nextElementSibling.colThree == undefined ? undefined : this.colThree;
          break;
      }
    }
  }
}
customElements.define('rhi-ui-isncsci-grid-row', RhiUiIsncsciGridRow);
