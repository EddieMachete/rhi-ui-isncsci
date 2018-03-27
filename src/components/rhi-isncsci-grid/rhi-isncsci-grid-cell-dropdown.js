"use strict";
import { html, render } from "../../helpers/lit-html.js";

class RhiIsncsciGridCellDropdown extends HTMLElement{
  get values(){
    if(!this._values){
      this._values = [];
    }
    return this._values;
  }
  set values(arr){
    this._values = arr;
    this.dispatchEvent(new CustomEvent("update-value"))
  }
  get selected(){
    return this._selected;
  }
  set selected(val){
    if(this._selected != val){
      this._selected = val;
      this.dispatchEvent(new CustomEvent("update-value"));
    }
  }
  get opened(){
    return this._opened;
  }
  set opened(val){
    this._opened = val;
  }

  get levelName(){
    return this._levelName;
  }
  set levelName(val){
    this._levelName = val;
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
    return (values,selected) => html`
      <style>
        :host{
          display:none;
          border: 1px solid black;
          vertical-align: middle;
          font-size: 16px;
          font-family: Arial, Helvetica, sans-serif;
          position: absolute;
          top: 38px;
          background-color: red;
          z-index: 10;
          width:64px;
        }
        button{
          background-color: white;
          border-width: 3px;
          border-color: black;
        }
        button.selected{
          border-color: cyan;
        }
      </style>
      <div>
        Select
        ${values.map( val =>
          val.label ?
          html`<button class="${val.value==selected ? 'selected' : ''}">${val.label}</button>` :
          html`<button class="${val==selected ? 'selected' : ''}">${val}</button>`
        )}
      </div>
    `;
  }

  static get observedAttributes() {
    return ['level-name','type','side'];
  }

  constructor() {
    super();
    this._init();
    this.attachShadow({mode: 'open'});
    this._update();
    this._addEventListeners();
  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if(oldVal === newVal)
      return
    switch (attrName) {
      case 'type':
        let type = this.getAttribute('type');
        this.type = type==null || type==undefined || type=="undefined" ? 'touch' : type;
        if(this.type == 'motor'){
          this.values = ['5*','5','4!','4','3!','3','2!','2','1!','1','0!','0','NT!','NT*','NT'];
        }else if(this.side == 'anal'){
          this.values =[
            {label:'none', value: 0},
            {label:'yes', value: 1},
            {label:'no', value: 2},
            {label:'nt', value: 4}
          ];
        }else{
          this.values =['2','1!','1','0!','0','NT!','NT*','NT'];
        }
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

  _init(){
    this._opened = false;
  }

  _addEventListeners(){
    this.addEventListener("update-value", this._update)
  }

  open(selectedValue){
    this.selected = selectedValue;
    this.opened = !this.opened;
    this.style.display = this.opened ? 'block' : 'none';
  }

  _update(){
    render(this.template(this.values,this.selected), this.shadowRoot);
    this._updateButtons();
  }

  _updateButtons(){
    let buttons = this.shadowRoot.querySelectorAll('button');
    if(buttons && buttons.length){
      buttons.forEach((button,i) => {
        button.onclick = _ => {this._onChange(this.values[i])}
      });
    }
  }

  _onChange(selection){
    this.selected = selection;
    if(this._side == 'anal'){
      this.dispatchEvent(new CustomEvent("update-cell-value",{
        detail:{
          side:this._side,
          type:this._type,
          value:this._selected.value
        },
        bubbles: true, composed: true
      }))
    }else{
      this.dispatchEvent(new CustomEvent("update-cell-value",{
        detail:{
          levelName:this._levelName,
          side:this._side,
          type:this._type,
          value:this._selected
        },
        bubbles: true, composed: true
      }))
    }
  }
}


customElements.define("rhi-isncsci-grid-cell-dropdown", RhiIsncsciGridCellDropdown);