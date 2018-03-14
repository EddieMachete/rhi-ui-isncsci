import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { DomIf } from '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import { DomRepeat } from '../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { BinaryObservation } from '../rhi-core-isncsci-algorithm/src/binaryObservation.js';
import './rhi-ui-isncsci-grid-row.js';
import './rhi-ui-isncsci-grid-cell.js';
import './rhi-ui-isncsci-grid-dropdown.js';


export class RhiUiIsncsciGrid extends PolymerElement {
  static get properties(){
    return {
      binaryOptions:{
        type: Array,
        value: [
          {label:'',value:BinaryObservation.none},
          {label:'Yes',value:BinaryObservation.yes},
          {label:'No',value:BinaryObservation.no},
          {label:'NT',value:BinaryObservation.nt}
        ]
      },
      propagateDown: Boolean,
      isncsciExam: {
        type: Object
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
        div.dropdowns{
          display: block;
          padding: 2rem;
        }
        .form{
          display: inline-block;
        }
        rhi-ui-isncsci-grid-dropdown{
          display: block;
        }
      </style>
      <div class="form">
        <template is="dom-repeat" items="[[isncsciExam.levels]]" as="isncsciExamLevel">
          <template is="dom-if" if="{{_skipC1(isncsciExamLevel)}}">
            <rhi-ui-isncsci-grid-row isncsci-exam-level="{{isncsciExamLevel}}"></rhi-ui-isncsci-grid-row>
          </template>
        </template>
        <div class="dropdowns">
          <rhi-ui-isncsci-grid-dropdown label="(VAC) Voluntary anal contraction" value="{{isncsciExam.analContraction}}" options="[[binaryOptions]]"></rhi-ui-isncsci-grid-dropdown>
          <rhi-ui-isncsci-grid-dropdown label="(DAP) Deep anal pressure" value="{{isncsciExam.analSensation}}" options="[[binaryOptions]]"></rhi-ui-isncsci-grid-dropdown>
        </div>
      </div>
      <slot name="diagram"></slot>
    `;
  }

  _skipC1(isncsciExamLevel){
    return isncsciExamLevel.name !== 'C1';
  }
}
customElements.define('rhi-ui-isncsci-grid', RhiUiIsncsciGrid);