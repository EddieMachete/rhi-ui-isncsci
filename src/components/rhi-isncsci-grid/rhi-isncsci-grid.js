"use strict";
import { html, render } from "../../helpers/lit-html.js";
import { IsncsciExam } from "../../algorithm/isncsciExam.js";
import "./rhi-isncsci-grid-row.js";
import "./rhi-isncsci-grid-cell.js";

class RhiIsncsciGrid extends HTMLElement{
  get isncsciExam(){
    if(!this._isncsciExam){
      // throw an error?
    }
    return this._isncsciExam;
  }
  set isncsciExam(val){
    this._isncsciExam = val;
    this.dispatchEvent(new CustomEvent("update-isncsci-exam"))
  }

  get template(){
    return (_getBinaryLabel,isncsciExam) => html`
      <style>
        :host{
          display: block;
        }
      </style>
      <div>
        ${isncsciExam.levels.slice(1).map( _ =>
          html`<rhi-isncsci-grid-row></rhi-isncsci-grid-row>`
        )}
        <rhi-isncsci-grid-cell side="anal" type="contraction" label="${_getBinaryLabel(isncsciExam.analContraction)}" value="${isncsciExam.analContraction}" disable-paint></rhi-isncsci-grid-cell>
        <rhi-isncsci-grid-cell side="anal" type="sensation" label="${_getBinaryLabel(isncsciExam.analSensation)}" value="${isncsciExam.analSensation}" disable-paint></rhi-isncsci-grid-cell>
      </div>
    `;
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this._update();
    this._addEventListeners();
  }

  _addEventListeners(){
    this.addEventListener("update-isncsci-exam", this._update);
  }

  // re-renders the grid
  // then _updateLevels
  _update(){
    if(!this.isncsciExam)
      return;
    render(this.template(this._getBinaryLabel,this.isncsciExam), this.shadowRoot);
    this._updateLevels(this.isncsciExam);
  }

  // Sets the isncsciExamLevel property for each <rhi-isncsci-grid-row> elements
  _updateLevels(isncsciExam){
    let isncsciGridRows = this.shadowRoot.querySelectorAll('rhi-isncsci-grid-row');
    if(isncsciGridRows && isncsciGridRows.length){
      isncsciGridRows.forEach((row,i) => {
        row.isncsciExamLevel = isncsciExam.levels[i+1]
      });
    }
  }

  _getBinaryLabel(binary){
    let label = '';
    switch (binary) {
      case 0:
        label = 'None';
        break;
      case 1:
        label = 'Yes';
        break;
      case 2:
        label = 'No';
        break;
      case 4:
        label = 'NT';
        break;

      default:
        label = '';
        break;
    }
    return label;
  }
}


customElements.define("rhi-isncsci-grid", RhiIsncsciGrid);