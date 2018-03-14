import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { DomIf } from '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import { DomRepeat } from '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';

export class RhiUiIsncsciGridDropdown extends PolymerElement {
  static get properties(){
    return {
      label: String,
      options: Array,
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
        :host{
          display: inline-block;
        }
      </style>
      <span>[[label]]</span>
      <select value="{{value}}" on-change="onChange">
        <template is="dom-repeat" items="[[options]]" as="option">
          <template is="dom-if" if="{{_if(option,value)}}">
            <option value$="[[option.value]]" selected>[[option.label]]</option>
          </template>
          <template is="dom-if" if="{{!_if(option,value)}}">
            <option value$="[[option.value]]">[[option.label]]</option>
          </template>
        </template>
      </select>
    `;
  }

  _if(option,value){
    return option.value == value;
  }

  onChange(e){
    this.value = Number.parseInt(e.target.value);
  }
}
customElements.define('rhi-ui-isncsci-grid-dropdown', RhiUiIsncsciGridDropdown);
