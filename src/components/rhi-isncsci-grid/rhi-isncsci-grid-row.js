"use strict";
import { html, render } from "../../helpers/lit-html.js";
import "./rhi-isncsci-grid-cell.js";

class IsncsciGridRow extends HTMLElement{
  get isncsciExamLevel(){
    return this._isncsciExamLevel;
  }
  set isncsciExamLevel(val){
    if(this._isncsciExamLevel != val){
      this._isncsciExamLevel = val;
      // this.dispatchEvent(new CustomEvent("update-isncsci-exam-level"))
    }else{
      // console.log(this._isncsciExamLevel.name + ' unchanged')
    }
    // TODO: make it only call when there is an actual change in the row
    this.dispatchEvent(new CustomEvent("update-isncsci-exam-level"))
  }

  get template(){
    return isncsciExamLevel => html`
      <style>
        :host{
          display: block;
          text-align: center;
          /*font-size:0;*/
        }
        div.divider{
          display: inline-block;
          margin: 0 2rem;
        }
      </style>
      <div>
        ${isncsciExamLevel.isKeyMuscle ?
          html`<rhi-isncsci-grid-cell value="${isncsciExamLevel.rightMotor}" level-name="${isncsciExamLevel.name}" side="right" type="motor" disable-paint></rhi-isncsci-grid-cell>` : ''
        }
        <rhi-isncsci-grid-cell value="${isncsciExamLevel.rightPrick}" level-name="${isncsciExamLevel.name}" side="right" type="prick"></rhi-isncsci-grid-cell>
        <rhi-isncsci-grid-cell value="${isncsciExamLevel.rightTouch}" level-name="${isncsciExamLevel.name}" side="right" type="touch"></rhi-isncsci-grid-cell>
        <div class="divider"></div>
        <rhi-isncsci-grid-cell value="${isncsciExamLevel.leftPrick}" level-name="${isncsciExamLevel.name}" side="left" type="prick"></rhi-isncsci-grid-cell>
        <rhi-isncsci-grid-cell value="${isncsciExamLevel.leftTouch}" level-name="${isncsciExamLevel.name}" side="left" type="touch"></rhi-isncsci-grid-cell>
        ${isncsciExamLevel.isKeyMuscle ?
          html`<rhi-isncsci-grid-cell value="${isncsciExamLevel.leftMotor}" level-name="${isncsciExamLevel.name}" side="left" type="motor" disable-paint></rhi-isncsci-grid-cell>` : ''
        }
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
    this.addEventListener("update-isncsci-exam-level", this._update)
  }

  _update(){
    if(!this._isncsciExamLevel)
      return;
    render(this.template(this._isncsciExamLevel), this.shadowRoot);
  }
}


customElements.define("rhi-isncsci-grid-row", IsncsciGridRow);