import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { DomIf } from '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import { DomRepeat } from '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';

export class RhiUiIsncsciGridDropdown extends PolymerElement {
  static get properties(){
    return {
      label: String,
      options: Array,
      value: {
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
          display: block;
        }
      </style>
      <span>[[label]]</span>
      <select data-name="AnalSensation" value="{{value}}" on-change="onChange">
        <option value="None"></option>
        <template is="dom-repeat" items="[[options]]" as="option">
          <template is="dom-if" if="{{_if(option,value)}}">
            <option value$="[[option]]" selected>[[option]]</option>
          </template>
          <template is="dom-if" if="{{!_if(option,value)}}">
            <option value$="[[option]]">[[option]]</option>
          </template>
        </template>
      </select>
    `;
  }

  _if(option,value){
    return option == value;
  }

  onChange(e){
    this.value = e.target.value;
  }
}
customElements.define('rhi-ui-isncsci-grid-dropdown', RhiUiIsncsciGridDropdown);
