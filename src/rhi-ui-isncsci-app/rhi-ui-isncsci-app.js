import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { IsncsciFormData } from '../rhi-ui-isncsci-models/rhi-ui-isncsci-form-data.js';
import { IsncsciSummary } from '../rhi-ui-isncsci-models/rhi-ui-isncsci-summary.js';
import '../rhi-ui-isncsci-grid/rhi-ui-isncsci-grid.js';
import '../rhi-ui-isncsci-service/rhi-ui-isncsci-service.js';
import '../rhi-ui-isncsci-summary/rhi-ui-isncsci-summary.js';

export class RhiUiIsncsciApp extends PolymerElement {
  static get properties(){
    return {
      formData: {
        type: Object,
        value: new IsncsciFormData()
        // value: {C2RightTouch:"2",C2LeftTouch:"2",C2RightPrick:"2",C2LeftPrick:"2",C3RightTouch:"2",C3LeftTouch:"2",C3RightPrick:"2",C3LeftPrick:"2",C4RightTouch:"2",C4LeftTouch:"2",C4RightPrick:"2",C4LeftPrick:"2",C5RightTouch:"2",C5LeftTouch:"1",C5RightPrick:"2",C5LeftPrick:"2",C5RightMotor:"1",C5LeftMotor:"2",C6RightTouch:"2",C6LeftTouch:"1",C6RightPrick:"2",C6LeftPrick:"1",C6RightMotor:"1",C6LeftMotor:"2",C7RightTouch:"2",C7LeftTouch:"1",C7RightPrick:"2",C7LeftPrick:"2",C7RightMotor:"1",C7LeftMotor:"2",C8RightTouch:"2",C8LeftTouch:"1",C8RightPrick:"2",C8LeftPrick:"1!",C8RightMotor:"1",C8LeftMotor:"2",T1RightTouch:"2",T1LeftTouch:"1",T1RightPrick:"2",T1LeftPrick:"1!",T1RightMotor:"1",T1LeftMotor:"2",T2RightTouch:"2",T2LeftTouch:"1",T2RightPrick:"2",T2LeftPrick:"1!",T3RightTouch:"2",T3LeftTouch:"1",T3RightPrick:"2",T3LeftPrick:"1!",T4RightTouch:"2",T4LeftTouch:"1",T4RightPrick:"2",T4LeftPrick:"1!",T5RightTouch:"2",T5LeftTouch:"1",T5RightPrick:"2",T5LeftPrick:"1!",T6RightTouch:"2",T6LeftTouch:"1",T6RightPrick:"2",T6LeftPrick:"1!",T7RightTouch:"2",T7LeftTouch:"1",T7RightPrick:"2",T7LeftPrick:"1!",T8RightTouch:"2",T8LeftTouch:"1",T8RightPrick:"2",T8LeftPrick:"1!",T9RightTouch:"2",T9LeftTouch:"1",T9RightPrick:"2",T9LeftPrick:"1!",T10RightTouch:"2",T10LeftTouch:"1",T10RightPrick:"2",T10LeftPrick:"1!",T11RightTouch:"2",T11LeftTouch:"1",T11RightPrick:"2",T11LeftPrick:"1!",T12RightTouch:"2",T12LeftTouch:"1",T12RightPrick:"2",T12LeftPrick:"1!",L1RightTouch:"2",L1LeftTouch:"1",L1RightPrick:"2",L1LeftPrick:"1!",L2RightTouch:"2",L2LeftTouch:"1",L2RightPrick:"2",L2LeftPrick:"1!",L2RightMotor:"1",L2LeftMotor:"2",L3RightTouch:"2",L3LeftTouch:"1",L3RightPrick:"2",L3LeftPrick:"1!",L3RightMotor:"1",L3LeftMotor:"2",L4RightTouch:"2",L4LeftTouch:"1",L4RightPrick:"2",L4LeftPrick:"1!",L4RightMotor:"1",L4LeftMotor:"2",L5RightTouch:"2",L5LeftTouch:"1",L5RightPrick:"2",L5LeftPrick:"1!",L5RightMotor:"1",L5LeftMotor:"2",S1RightTouch:"2",S1LeftTouch:"1",S1RightPrick:"2",S1LeftPrick:"1!",S1RightMotor:"1",S1LeftMotor:"2",S2RightTouch:"2",S2LeftTouch:"1",S2RightPrick:"2",S2LeftPrick:"1!",S3RightTouch:"2",S3LeftTouch:"1",S3RightPrick:"2",S3LeftPrick:"1!",S4_5RightTouch:"2",S4_5LeftTouch:"1",S4_5RightPrick:"2",S4_5LeftPrick:"1!",RightLowestNonKeyMuscleWithMotorFunction:"0",LeftLowestNonKeyMuscleWithMotorFunction:"0",AnalContraction:"Yes",AnalSensation:"Yes"}
      },
      propagateDown: {
        type: Boolean,
        value: true
      },
      summary: {
        type: Object,
        value: new IsncsciSummary()
      }
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <style>
        input{
          width: 20px;
        }
        button{
          display: block;
        }
      </style>
      <button on-click="onCalculate">Calculate</button>
      <button on-click="onPropagateDown">Propagate down {{propagateDown}}</button>
      <button on-click="clearData">Clear Data</button>
      <button on-click="_sampleData">Sample Data</button>
      <rhi-ui-isncsci-grid form-data="{{formData}}" propagate-down$="{{propagateDown}}"></rhi-ui-isncsci-grid>
      <rhi-ui-isncsci-service id="service" form-data="[[formData]]"></rhi-ui-isncsci-service>
      <rhi-ui-isncsci-summary summary="[[summary]]"></rhi-ui-isncsci-summary>
    `;
  }

  ready(){
    super.ready();
  }

  onCalculate(){
    this.$.service.calculate()
    .then(summary => {
      this.summary = JSON.parse(summary);
    }).catch(err =>{
      console.log("something went wrong");
    });
  }

  onPropagateDown(){
    this.propagateDown = !this.propagateDown;
  }

  clearData(){
    this.formData = new IsncsciFormData();
  }

  _sampleData(){
    this.formData = {C2RightTouch:"2",C2LeftTouch:"2",C2RightPrick:"2",C2LeftPrick:"2",C3RightTouch:"2",C3LeftTouch:"2",C3RightPrick:"2",C3LeftPrick:"2",C4RightTouch:"2",C4LeftTouch:"2",C4RightPrick:"2",C4LeftPrick:"2",C5RightTouch:"2",C5LeftTouch:"1",C5RightPrick:"2",C5LeftPrick:"2",C5RightMotor:"1",C5LeftMotor:"2",C6RightTouch:"2",C6LeftTouch:"1",C6RightPrick:"2",C6LeftPrick:"1",C6RightMotor:"1",C6LeftMotor:"2",C7RightTouch:"2",C7LeftTouch:"1",C7RightPrick:"2",C7LeftPrick:"2",C7RightMotor:"1",C7LeftMotor:"2",C8RightTouch:"2",C8LeftTouch:"1",C8RightPrick:"2",C8LeftPrick:"1!",C8RightMotor:"1",C8LeftMotor:"2",T1RightTouch:"2",T1LeftTouch:"1",T1RightPrick:"2",T1LeftPrick:"1!",T1RightMotor:"1",T1LeftMotor:"2",T2RightTouch:"2",T2LeftTouch:"1",T2RightPrick:"2",T2LeftPrick:"1!",T3RightTouch:"2",T3LeftTouch:"1",T3RightPrick:"2",T3LeftPrick:"1!",T4RightTouch:"2",T4LeftTouch:"1",T4RightPrick:"2",T4LeftPrick:"1!",T5RightTouch:"2",T5LeftTouch:"1",T5RightPrick:"2",T5LeftPrick:"1!",T6RightTouch:"2",T6LeftTouch:"1",T6RightPrick:"2",T6LeftPrick:"1!",T7RightTouch:"2",T7LeftTouch:"1",T7RightPrick:"2",T7LeftPrick:"1!",T8RightTouch:"2",T8LeftTouch:"1",T8RightPrick:"2",T8LeftPrick:"1!",T9RightTouch:"2",T9LeftTouch:"1",T9RightPrick:"2",T9LeftPrick:"1!",T10RightTouch:"2",T10LeftTouch:"1",T10RightPrick:"2",T10LeftPrick:"1!",T11RightTouch:"2",T11LeftTouch:"1",T11RightPrick:"2",T11LeftPrick:"1!",T12RightTouch:"2",T12LeftTouch:"1",T12RightPrick:"2",T12LeftPrick:"1!",L1RightTouch:"2",L1LeftTouch:"1",L1RightPrick:"2",L1LeftPrick:"1!",L2RightTouch:"2",L2LeftTouch:"1",L2RightPrick:"2",L2LeftPrick:"1!",L2RightMotor:"1",L2LeftMotor:"2",L3RightTouch:"2",L3LeftTouch:"1",L3RightPrick:"2",L3LeftPrick:"1!",L3RightMotor:"1",L3LeftMotor:"2",L4RightTouch:"2",L4LeftTouch:"1",L4RightPrick:"2",L4LeftPrick:"1!",L4RightMotor:"1",L4LeftMotor:"2",L5RightTouch:"2",L5LeftTouch:"1",L5RightPrick:"2",L5LeftPrick:"1!",L5RightMotor:"1",L5LeftMotor:"2",S1RightTouch:"2",S1LeftTouch:"1",S1RightPrick:"2",S1LeftPrick:"1!",S1RightMotor:"1",S1LeftMotor:"2",S2RightTouch:"2",S2LeftTouch:"1",S2RightPrick:"2",S2LeftPrick:"1!",S3RightTouch:"2",S3LeftTouch:"1",S3RightPrick:"2",S3LeftPrick:"1!",S4_5RightTouch:"2",S4_5LeftTouch:"1",S4_5RightPrick:"2",S4_5LeftPrick:"1!",RightLowestNonKeyMuscleWithMotorFunction:"0",LeftLowestNonKeyMuscleWithMotorFunction:"0",AnalContraction:"Yes",AnalSensation:"No"};
  }
}
customElements.define('rhi-ui-isncsci-app', RhiUiIsncsciApp);
