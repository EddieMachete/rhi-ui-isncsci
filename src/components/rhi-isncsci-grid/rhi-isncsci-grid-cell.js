"use strict";
import { html, render } from "../../helpers/lit-html.js";
import "./rhi-isncsci-grid-cell-dropdown.js";

class RhiIsncsciGridCell extends HTMLElement{
  get value(){
    return this._value;
  }
  set value(val){
    // val = val.toLowerCase() == 'undefined' || val.toLowerCase() == 'null' ? undefined : val;
    if(this._value !== val){
      this._value = val;
      this.setAttribute('value', this._value);
      this.dispatchEvent(new CustomEvent("update-value"))
    }else{
      // console.log(this._value + ' unchanged')
    }
  }
  get label(){
    return this._label;
  }
  set label(val){
    this._label = val;
    this.dispatchEvent(new CustomEvent("update-value"))
  }

  get levelName(){
    return this._levelName;
  }
  set levelName(val){
    this._levelName = val;
    this.dispatchEvent(new CustomEvent("update-value"))
  }

  get side(){
    return this._side;
  }
  set side(val){
    this._side = val;
  }

  get type(){
    return this._type;
  }
  set type(val){
    this._type = val;
  }

  get template(){
    return (levelName, side, type, label, value) => html`
      <style>
        :host{
          position: relative;
          display: inline-block;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border: 1px solid black;
          vertical-align: middle;
          font-size: 16px;
          font-family: Arial, Helvetica, sans-serif;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Chrome and Opera */
        }
      </style>
      <span>
        ${label ? label: (value ? value : '')}
      </span>
      <rhi-isncsci-grid-cell-dropdown level-name="${levelName}" type="${type}" side="${side}"></rhi-isncsci-grid-cell-dropdown>
    `;
  }

  static get observedAttributes() {
    return ['level-name', 'side', 'type', 'label', 'value', 'disable-paint'];
  }

  constructor() {
    super();
    this._initAttributesToProperties();
    this.attachShadow({mode: 'open'});
    this._update();
    this._addEventListeners();
    this._painted=false;
  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if(oldVal === newVal)
      return
    switch (attrName) {
      case 'disable-paint':
        this._disablePaint = this.hasAttribute('disable-paint');
        break;
      case 'level-name':
        let levelName = this.getAttribute('level-name');
        this.levelName = levelName==null || levelName==undefined || levelName=="undefined" ? '' : levelName;
        break;
      default:
        let value = this.getAttribute(attrName);
        this[attrName] = value==null || value==undefined || value=="undefined" ? '' : value;
        break;
    }
  }

  _initAttributesToProperties(){
    let value = this.getAttribute('value');
    this.value = value==null || value==undefined || value=="undefined" ? '' : value;

    let type = this.getAttribute('type');
    this.type = type==null || type==undefined || type=="undefined" ? '' : type;

    let levelName = this.getAttribute('level-name');
    this.levelName = levelName==null || levelName==undefined || levelName=="undefined" ? '' : levelName;

    let side = this.getAttribute('side');
    this.side = side==null || side==undefined || side=="undefined" ? '' : side;

    let label = this.getAttribute('label');
    this.label = label==null || label==undefined || label=="undefined" ? '' : label;

    this._disablePaint = this.hasAttribute('disable-paint');
  }

  _addEventListeners(){
    this.addEventListener("update-value", this._update);
    this.addEventListener('click', this._openDropdown);

    if(!this._disablePaint){
      this.addEventListener('mousedown', this._paintStart);
      this.addEventListener('mousemove', this._paint);
      this.addEventListener('mouseup', this._paintEnd);
      // this.addEventListener('touchstart', this._paintStart);
      // this.addEventListener('touchmove', this._paint);
      // this.addEventListener('touchend', this._paintEnd);
    }
  }

  _openDropdown(){
    this.shadowRoot.querySelector('rhi-isncsci-grid-cell-dropdown').open(this.value);
  }

  _update(){
    render(this.template(this._levelName, this._side, this._type, this._label, this._value), this.shadowRoot);
  }

  _paintStart(){
    // this._painting = true;
    // this._painted = this._paintingValue == this._value;
    // this.dispatchEvent(new CustomEvent("paint-start",{
    //   detail:{
    //     value: this._value
    //   },
    //   bubbles: true, composed: true
    // }));
    window.paintingValue = this._value;
  }
  _paint(e){
    e.preventDefault(); // disables scrolling for touch
    // if(this._painting && !this._painted){
    if(window.paintingValue && window.paintingValue != '' && window.paintingValue != this.value){
      this.dispatchEvent(new CustomEvent("paint-cell-value",{
        detail:{
          levelName:this._levelName,
          side:this._side,
          type:this._type
        },
        bubbles: true, composed: true
      }));
    }
  }
  _paintEnd(){
    // this._painting=false;
    // this._painted=false;
    // this.dispatchEvent(new CustomEvent("paint-end",{bubbles: true, composed: true}));
    window.paintingValue = '';
  }
}

customElements.define("rhi-isncsci-grid-cell", RhiIsncsciGridCell);