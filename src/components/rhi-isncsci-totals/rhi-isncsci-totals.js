"use strict";
import { IsncsciTotals } from "../../algorithm/isncsciTotals.js";
import { html, render } from "../../helpers/lit-html.js";

export class RhiIsncsciTotals extends HTMLElement{

  get isncsciTotals(){
    if(!this._isncsciTotals){
      this._isncsciTotals = new IsncsciTotals();
    }
    return this._isncsciTotals;
  }
  set isncsciTotals(val){
    this._isncsciTotals = val;
    this._isncsciTotals.rightMotorTotal = val.getRightMotorTotal();
    this._isncsciTotals.leftMotorTotal = val.getLeftMotorTotal();
    this._isncsciTotals.upperMotorTotal = val.getUpperMotorTotal();
    this._isncsciTotals.lowerMotorTotal = val.getLowerMotorTotal();
    this._isncsciTotals.touchTotal = val.getTouchTotal();
    this._isncsciTotals.prickTotal = val.getPrickTotal();
    this._isncsciTotals.rightSensory = val.getRightSensoryLongValueString();
    this._isncsciTotals.leftSensory = val.getLeftSensoryLongValueString();
    this._isncsciTotals.rightMotor = val.getRightMotorLongValueString();
    this._isncsciTotals.leftMotor = val.getLeftMotorLongValueString();
    this._isncsciTotals.neurologicalLevelOfInjury = val.getNeurologicalLevelsOfInjuryLongValueString();
    this._isncsciTotals.rightSensoryZpp = val.getRightSensoryZppLongValueString();
    this._isncsciTotals.leftSensoryZpp = val.getLeftSensoryZppLongValueString();
    this._isncsciTotals.rightMotorZpp = val.getRightMotorZppLongValueString();
    this._isncsciTotals.leftMotorZpp = val.getLeftMotorZppLongValueString();
    this._isncsciTotals.asiaImpairmentScale = val.getAsiaImpairmentScaleValues();
    this.dispatchEvent(new CustomEvent("update-isncsci-totals"));
  }

  get template(){
    return (isncsciTotals,mismatch) => html`
      <style>
        :host{
          border: solid 1px black;
          padding: 10px;
          word-break: break-all;
        }
        .danger{
          background-color: red;
        }
      </style>
      <div class="${mismatch && mismatch.includes('rightUpperMotorTotal') ? 'danger' : ''}">
        rightUpperMotorTotal: ${isncsciTotals.rightUpperMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('rightUpperMotorContainsNt') ? 'danger' : ''}">
        rightUpperMotorContainsNt: ${isncsciTotals.rightUpperMotorContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('leftUpperMotorTotal') ? 'danger' : ''}">
        leftUpperMotorTotal: ${isncsciTotals.leftUpperMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('leftUpperMotorContainsNt') ? 'danger' : ''}">
        leftUpperMotorContainsNt: ${isncsciTotals.leftUpperMotorContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('rightLowerMotorTotal') ? 'danger' : ''}">
        rightLowerMotorTotal: ${isncsciTotals.rightLowerMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('rightLowerMotorContainsNt') ? 'danger' : ''}">
        rightLowerMotorContainsNt: ${isncsciTotals.rightLowerMotorContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('leftLowerMotorTotal') ? 'danger' : ''}">
        leftLowerMotorTotal: ${isncsciTotals.leftLowerMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('leftLowerMotorContainsNt') ? 'danger' : ''}">
        leftLowerMotorContainsNt: ${isncsciTotals.leftLowerMotorContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('rightTouchTotal') ? 'danger' : ''}">
        rightTouchTotal: ${isncsciTotals.rightTouchTotal}
      </div>
      <div class="${mismatch && mismatch.includes('rightTouchContainsNt') ? 'danger' : ''}">
        rightTouchContainsNt: ${isncsciTotals.rightTouchContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('leftTouchTotal') ? 'danger' : ''}">
        leftTouchTotal: ${isncsciTotals.leftTouchTotal}
      </div>
      <div class="${mismatch && mismatch.includes('leftTouchContainsNt') ? 'danger' : ''}">
        leftTouchContainsNt: ${isncsciTotals.leftTouchContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('rightPrickTotal') ? 'danger' : ''}">
        rightPrickTotal: ${isncsciTotals.rightPrickTotal}
      </div>
      <div class="${mismatch && mismatch.includes('rightPrickContainsNt') ? 'danger' : ''}">
        rightPrickContainsNt: ${isncsciTotals.rightPrickContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('leftPrickTotal') ? 'danger' : ''}">
        leftPrickTotal: ${isncsciTotals.leftPrickTotal}
      </div>
      <div class="${mismatch && mismatch.includes('leftPrickContainsNt') ? 'danger' : ''}">
        leftPrickContainsNt: ${isncsciTotals.leftPrickContainsNt}
      </div>
      <div class="${mismatch && mismatch.includes('rightMotorTotal') ? 'danger' : ''}">
        rightMotorTotal: ${isncsciTotals.rightMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('leftMotorTotal') ? 'danger' : ''}">
        leftMotorTotal: ${isncsciTotals.leftMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('upperMotorTotal') ? 'danger' : ''}">
        upperMotorTotal: ${isncsciTotals.upperMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('lowerMotorTotal') ? 'danger' : ''}">
        lowerMotorTotal: ${isncsciTotals.lowerMotorTotal}
      </div>
      <div class="${mismatch && mismatch.includes('touchTotal') ? 'danger' : ''}">
        touchTotal: ${isncsciTotals.touchTotal}
      </div>
      <div class="${mismatch && mismatch.includes('prickTotal') ? 'danger' : ''}">
        prickTotal: ${isncsciTotals.prickTotal}
      </div>
      <div class="${mismatch && mismatch.includes('rightSensory') ? 'danger' : ''}">
        rightSensory: ${isncsciTotals.rightSensory}
      </div>
      <div class="${mismatch && mismatch.includes('leftSensory') ? 'danger' : ''}">
        leftSensory: ${isncsciTotals.leftSensory}
      </div>
      <div class="${mismatch && mismatch.includes('rightMotor') ? 'danger' : ''}">
        rightMotor: ${isncsciTotals.rightMotor}
      </div>
      <div class="${mismatch && mismatch.includes('leftMotor') ? 'danger' : ''}">
        leftMotor: ${isncsciTotals.leftMotor}
      </div>
      <div class="${mismatch && mismatch.includes('neurologicalLevelOfInjury') ? 'danger' : ''}">
        neurologicalLevelOfInjury: ${isncsciTotals.neurologicalLevelOfInjury}
      </div>
      <div class="${mismatch && mismatch.includes('rightSensoryZpp') ? 'danger' : ''}">
        rightSensoryZpp: ${isncsciTotals.rightSensoryZpp}
      </div>
      <div class="${mismatch && mismatch.includes('leftSensoryZpp') ? 'danger' : ''}">
        leftSensoryZpp: ${isncsciTotals.leftSensoryZpp}
      </div>
      <div class="${mismatch && mismatch.includes('rightMotorZpp') ? 'danger' : ''}">
        rightMotorZpp: ${isncsciTotals.rightMotorZpp}
      </div>
      <div class="${mismatch && mismatch.includes('leftMotorZpp') ? 'danger' : ''}">
        leftMotorZpp: ${isncsciTotals.leftMotorZpp}
      </div>
      <div class="${mismatch && mismatch.includes('asiaImpairmentScale') ? 'danger' : ''}">
        asiaImpairmentScale: ${isncsciTotals.asiaImpairmentScale}
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
    this.addEventListener("update-isncsci-totals", this._update);
  }

  _update(){
    if(!this._isncsciTotals)
      return;
    render(this.template(this._isncsciTotals), this.shadowRoot);
  }
}

customElements.define("rhi-isncsci-totals", RhiIsncsciTotals);