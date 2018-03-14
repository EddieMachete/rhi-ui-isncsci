import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import './rhi-ui-isncsci-summary-cell.js';

export class RhiUiIsncsciSummary extends PolymerElement {
  static get properties(){
    return {
      summary: {
        type: Object
      }
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <rhi-ui-isncsci-summary-cell label="AsiaImpairmentScale" value="{{summary.asiaImpairmentScaleValues}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="Completeness" value="{{summary.completeness}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftLowerMotorTotal" value="{{summary.leftLowerMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftMotor" value="{{summary.leftMotor}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftMotorZpp" value="{{summary.leftMotorZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftMotorTotal" value="{{summary.leftMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftPrickTotal" value="{{summary.leftPrickTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftSensory" value="{{summary.leftSensory}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftSensoryZpp" value="{{summary.leftSensoryZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftTouchTotal" value="{{summary.leftTouchTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftUpperMotorTotal" value="{{summary.leftUpperMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LowerMotorTotal" value="{{summary.lowerMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="NeurologicalLevelOfInjury" value="{{summary.neurologicalLevelOfInjury}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="PrickTotal" value="{{summary.prickTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightLowerMotorTotal" value="{{summary.rightLowerMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightMotor" value="{{summary.rightMotor}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightMotorZpp" value="{{summary.rightMotorZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightMotorTotal" value="{{summary.rightMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightPrickTotal" value="{{summary.rightPrickTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightSensory" value="{{summary.rightSensory}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightSensoryZpp" value="{{summary.rightSensoryZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightTouchTotal" value="{{summary.rightTouchTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightUpperMotorTotal" value="{{summary.rightUpperMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="TouchTotal" value="{{summary.touchTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="UpperMotorTotal" value="{{summary.upperMotorTotal}}"></rhi-ui-isncsci-summary-cell>
    `;
  }
}
customElements.define('rhi-ui-isncsci-summary', RhiUiIsncsciSummary);
