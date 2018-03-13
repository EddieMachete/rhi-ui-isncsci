import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { IsncsciSummary } from '../rhi-ui-isncsci-models/rhi-ui-isncsci-summary.js';
import './rhi-ui-isncsci-summary-cell.js';

export class RhiUiIsncsciSummary extends PolymerElement {
  static get properties(){
    return {
      summary: {
        type: Object,
        value: new IsncsciSummary()
      }
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <rhi-ui-isncsci-summary-cell label="AsiaImpairmentScale" value="{{summary.AsiaImpairmentScale}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="Completeness" value="{{summary.Completeness}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftLowerMotorTotal" value="{{summary.LeftLowerMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftMotor" value="{{summary.LeftMotor}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftMotorZpp" value="{{summary.LeftMotorZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftMotorTotal" value="{{summary.LeftMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftPrickTotal" value="{{summary.LeftPrickTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftSensory" value="{{summary.LeftSensory}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftSensoryZpp" value="{{summary.LeftSensoryZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftTouchTotal" value="{{summary.LeftTouchTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LeftUpperMotorTotal" value="{{summary.LeftUpperMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="LowerMotorTotal" value="{{summary.LowerMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="NeurologicalLevelOfInjury" value="{{summary.NeurologicalLevelOfInjury}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="PrickTotal" value="{{summary.PrickTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightLowerMotorTotal" value="{{summary.RightLowerMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightMotor" value="{{summary.RightMotor}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightMotorZpp" value="{{summary.RightMotorZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightMotorTotal" value="{{summary.RightMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightPrickTotal" value="{{summary.RightPrickTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightSensory" value="{{summary.RightSensory}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightSensoryZpp" value="{{summary.RightSensoryZpp}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightTouchTotal" value="{{summary.RightTouchTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="RightUpperMotorTotal" value="{{summary.RightUpperMotorTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="TouchTotal" value="{{summary.TouchTotal}}"></rhi-ui-isncsci-summary-cell>
      <rhi-ui-isncsci-summary-cell label="UpperMotorTotal" value="{{summary.UpperMotorTotal}}"></rhi-ui-isncsci-summary-cell>
    `;
  }
}
customElements.define('rhi-ui-isncsci-summary', RhiUiIsncsciSummary);
