"use strict";
import { RhiIsncsciTotals } from "./rhi-isncsci-totals.js";
import { html, render } from "../../helpers/lit-html.js";

class RhiIsncsciTestTotals extends RhiIsncsciTotals{
  constructor(){
      super();
  }
  get isncsciTestTotals(){
    return this._isncsciTestTotals;
  }
  set isncsciTestTotals(val){
    this._isncsciTestTotals = val;
    this.dispatchEvent(new CustomEvent("check-isncsci-test-totals"));
  }
  _addEventListeners(){
    this.addEventListener("check-isncsci-test-totals", this.checkTotals);
    this.addEventListener("update-isncsci-test-totals", this._update);
  }
  _update(){
    if(!this._isncsciTestTotals)
      return;
    render(this.template(this._isncsciTestTotals,this._mismatch), this.shadowRoot);
  }
  checkTotals(){
    if(this._isncsciTotals && this._isncsciTestTotals){
      let mismatch = [];
      Object.keys(this._isncsciTestTotals).forEach(key => {
        if(this._isncsciTestTotals[key] != this._isncsciTotals[key]){
          mismatch.push(key)
        }
      });
      this._mismatch = mismatch
    }
    this.dispatchEvent(new CustomEvent("update-isncsci-test-totals"));
  }
}

customElements.define("rhi-isncsci-test-totals", RhiIsncsciTestTotals);