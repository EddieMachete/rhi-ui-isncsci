import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { IsncsciFormData } from '../rhi-ui-isncsci-models/rhi-ui-isncsci-form-data.js';
import './rhi-ui-isncsci-grid-row.js';
import './rhi-ui-isncsci-grid-cell.js';
import './rhi-ui-isncsci-grid-dropdown.js';
export class RhiUiIsncsciGrid extends PolymerElement {
  static get properties(){
    return {
      options:{
        type: Array,
        value: ['Yes','No','NT']
      },
      propagateDown: Boolean,
      formData: {
        type: Object,
        value: new IsncsciFormData()
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
        div.right{
          display: inline-block;
          text-align: right;
        }
        div.divider{
          display: inline-block;
          margin: 2rem;
        }
        div.left{
          display: inline-block;
        }
        div.dropdowns{
          display: block;
          padding: 2rem;
        }
      </style>
      <div class="right">
        <rhi-ui-isncsci-grid-row right label="C2" col-two="{{formData.C2RightTouch}}" col-three="{{formData.C2RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="C3" col-two="{{formData.C3RightTouch}}" col-three="{{formData.C3RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="C4" col-two="{{formData.C4RightTouch}}" col-three="{{formData.C4RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Elbow flexors" label="C5" col-one="{{formData.C5RightMotor}}" col-two="{{formData.C5RightTouch}}" col-three="{{formData.C5RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Wrist extensors" label="C6" col-one="{{formData.C6RightMotor}}" col-two="{{formData.C6RightTouch}}" col-three="{{formData.C6RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Elbow extensors" label="C7" col-one="{{formData.C7RightMotor}}" col-two="{{formData.C7RightTouch}}" col-three="{{formData.C7RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Finger flexors" label="C8" col-one="{{formData.C8RightMotor}}" col-two="{{formData.C8RightTouch}}" col-three="{{formData.C8RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Finger abductors (little finger)" label="T1" col-one="{{formData.T1RightMotor}}" col-two="{{formData.T1RightTouch}}" col-three="{{formData.T1RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T2" col-two="{{formData.T2RightTouch}}" col-three="{{formData.T2RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T3" col-two="{{formData.T3RightTouch}}" col-three="{{formData.T3RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T4" col-two="{{formData.T4RightTouch}}" col-three="{{formData.T4RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T5" col-two="{{formData.T5RightTouch}}" col-three="{{formData.T5RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T6" col-two="{{formData.T6RightTouch}}" col-three="{{formData.T6RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T7" col-two="{{formData.T7RightTouch}}" col-three="{{formData.T7RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T8" col-two="{{formData.T8RightTouch}}" col-three="{{formData.T8RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T9" col-two="{{formData.T9RightTouch}}" col-three="{{formData.T9RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T10" col-two="{{formData.T10RightTouch}}" col-three="{{formData.T10RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T11" col-two="{{formData.T11RightTouch}}" col-three="{{formData.T11RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="T12" col-two="{{formData.T12RightTouch}}" col-three="{{formData.T12RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="L1" col-two="{{formData.L1RightTouch}}" col-three="{{formData.L1RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Hip flexors" label="L2" col-one="{{formData.L2RightMotor}}" col-two="{{formData.L2RightTouch}}" col-three="{{formData.L2RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Knee extensors" label="L3" col-one="{{formData.L3RightMotor}}" col-two="{{formData.L3RightTouch}}" col-three="{{formData.L3RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Ankle dorsiflexors" label="L4" col-one="{{formData.L4RightMotor}}" col-two="{{formData.L4RightTouch}}" col-three="{{formData.L4RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Long toe extensors" label="L5" col-one="{{formData.L5RightMotor}}" col-two="{{formData.L5RightTouch}}" col-three="{{formData.L5RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right helper="Ankle plantar flexors" label="S1" col-one="{{formData.S1RightMotor}}" col-two="{{formData.S1RightTouch}}" col-three="{{formData.S1RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="S2" col-two="{{formData.S2RightTouch}}" col-three="{{formData.S2RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="S3" col-two="{{formData.S3RightTouch}}" col-three="{{formData.S3RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row right label="S4-5" col-two="{{formData.S4_5RightTouch}}" col-three="{{formData.S4_5RightPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
      </div>
      <div class="divider"></div>
      <div class="left">
        <rhi-ui-isncsci-grid-row left label="C2" col-one="{{formData.C2LeftTouch}}" col-two="{{formData.C2LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="C3" col-one="{{formData.C3LeftTouch}}" col-two="{{formData.C3LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="C4" col-one="{{formData.C4LeftTouch}}" col-two="{{formData.C4LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Elbow flexors" label="C5" col-one="{{formData.C5LeftMotor}}" col-two="{{formData.C5LeftTouch}}" col-three="{{formData.C5LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Wrist extensors" label="C6" col-one="{{formData.C6LeftMotor}}" col-two="{{formData.C6LeftTouch}}" col-three="{{formData.C6LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Elbow extensors" label="C7" col-one="{{formData.C7LeftMotor}}" col-two="{{formData.C7LeftTouch}}" col-three="{{formData.C7LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Finger flexors" label="C8" col-one="{{formData.C8LeftMotor}}" col-two="{{formData.C8LeftTouch}}" col-three="{{formData.C8LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Finger abductors (little finger)" label="T1" col-one="{{formData.T1LeftMotor}}" col-two="{{formData.T1LeftTouch}}" col-three="{{formData.T1LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T2" col-one="{{formData.T2LeftTouch}}" col-two="{{formData.T2LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T3" col-one="{{formData.T3LeftTouch}}" col-two="{{formData.T3LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T4" col-one="{{formData.T4LeftTouch}}" col-two="{{formData.T4LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T5" col-one="{{formData.T5LeftTouch}}" col-two="{{formData.T5LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T6" col-one="{{formData.T6LeftTouch}}" col-two="{{formData.T6LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T7" col-one="{{formData.T7LeftTouch}}" col-two="{{formData.T7LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T8" col-one="{{formData.T8LeftTouch}}" col-two="{{formData.T8LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T9" col-one="{{formData.T9LeftTouch}}" col-two="{{formData.T9LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T10" col-one="{{formData.T10LeftTouch}}" col-two="{{formData.T10LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T11" col-one="{{formData.T11LeftTouch}}" col-two="{{formData.T11LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="T12" col-one="{{formData.T12LeftTouch}}" col-two="{{formData.T12LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="L1" col-one="{{formData.L1LeftTouch}}" col-two="{{formData.L1LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Hip flexors" label="L2" col-one="{{formData.L2LeftMotor}}" col-two="{{formData.L2LeftTouch}}" col-three="{{formData.L2LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Knee extensors" label="L3" col-one="{{formData.L3LeftMotor}}" col-two="{{formData.L3LeftTouch}}" col-three="{{formData.L3LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Ankle dorsiflexors" label="L4" col-one="{{formData.L4LeftMotor}}" col-two="{{formData.L4LeftTouch}}" col-three="{{formData.L4LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Long toe extensors" label="L5" col-one="{{formData.L5LeftMotor}}" col-two="{{formData.L5LeftTouch}}" col-three="{{formData.L5LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left helper="Ankle plantar flexors" label="S1" col-one="{{formData.S1LeftMotor}}" col-two="{{formData.S1LeftTouch}}" col-three="{{formData.S1LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="S2" col-one="{{formData.S2LeftTouch}}" col-two="{{formData.S2LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="S3" col-one="{{formData.S3LeftTouch}}" col-two="{{formData.S3LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
        <rhi-ui-isncsci-grid-row left label="S4-5" col-one="{{formData.S4_5LeftTouch}}" col-two="{{formData.S4_5LeftPrick}}" propagate-down$="[[propagateDown]]"></rhi-ui-isncsci-grid-row>
      </div>
      <div class="dropdowns">
        <rhi-ui-isncsci-grid-dropdown label="(VAC) Voluntary anal contraction" value="{{formData.AnalContraction}}" options="[[options]]"></rhi-ui-isncsci-grid-dropdown>
        <rhi-ui-isncsci-grid-dropdown label="(DAP) Deep anal pressure" value="{{formData.AnalSensation}}" options="[[options]]"></rhi-ui-isncsci-grid-dropdown>
      </div>
    `;
  }

  _formatFormData(formData){
    return JSON.stringify(formData);
  }
}
customElements.define('rhi-ui-isncsci-grid', RhiUiIsncsciGrid);