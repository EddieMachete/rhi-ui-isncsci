import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { DomIf } from '../../node_modules/@polymer/polymer/lib/elements/dom-if.js';
export class RhiUiIsncsciGridRow extends PolymerElement {
  static get properties(){
    return {
      touchPrickOptions:{
        type: Array,
        value: [
          {label:'2',value:'2'},
          {label:'1!',value:'1!'},
          {label:'1',value:'1'},
          {label:'0!',value:'0!'},
          {label:'0',value:'0'},
          {label:'NT!',value:'NT!'},
          {label:'NT*',value:'NT*'},
          {label:'NT',value:'NT'}
        ]
      },
      motorOptions:{
        type: Array,
        value: [
          {label:'5*',value:'5*'},
          {label:'5',value:'5'},
          {label:'4!',value:'4!'},
          {label:'4',value:'4'},
          {label:'3!',value:'3!'},
          {label:'3',value:'3'},
          {label:'2!',value:'2!'},
          {label:'2',value:'2'},
          {label:'1!',value:'1!'},
          {label:'1',value:'1'},
          {label:'0!',value:'0!'},
          {label:'0',value:'0'},
          {label:'NT!',value:'NT!'},
          {label:'NT*',value:'NT*'},
          {label:'NT',value:'NT'}
        ]
      },
      propagateDown: Boolean,
      isncsciExamLevel: {
        type: Object,
        notify: true
      }
    }
  }
  static get template() {
    let html = (a)=>{return a[0]} // just using for syntax highlighting
    return html`
      <style>
        :host{
          display: block;
          text-align: center;
        }
        div.divider{
          display: inline-block;
          margin: 0 2rem;
        }
      </style>
      <!-- <template is="dom-if" if="{{isncsciExamLevel.isKeyMuscle}}"><span>[[helper]]</span></template> -->
      <span>[[isncsciExamLevel.name]]</span>

      <template is="dom-if" if="{{isncsciExamLevel.isKeyMuscle}}">
        <rhi-ui-isncsci-grid-dropdown value="{{isncsciExamLevel.rightMotor}}" options="[[motorOptions]]"></rhi-ui-isncsci-grid-dropdown>
      </template>
      <rhi-ui-isncsci-grid-dropdown value="{{isncsciExamLevel.rightTouch}}" options="[[touchPrickOptions]]"></rhi-ui-isncsci-grid-dropdown>
      <rhi-ui-isncsci-grid-dropdown value="{{isncsciExamLevel.rightPrick}}" options="[[touchPrickOptions]]"></rhi-ui-isncsci-grid-dropdown>

      <div class="divider"></div>

      <rhi-ui-isncsci-grid-dropdown value="{{isncsciExamLevel.leftTouch}}" options="[[touchPrickOptions]]"></rhi-ui-isncsci-grid-dropdown>
      <rhi-ui-isncsci-grid-dropdown value="{{isncsciExamLevel.leftPrick}}" options="[[touchPrickOptions]]"></rhi-ui-isncsci-grid-dropdown>
      <template is="dom-if" if="{{isncsciExamLevel.isKeyMuscle}}">
        <rhi-ui-isncsci-grid-dropdown value="{{isncsciExamLevel.leftMotor}}" options="[[motorOptions]]"></rhi-ui-isncsci-grid-dropdown>
      </template>

      <span>[[isncsciExamLevel.name]]</span>
      <!-- <template is="dom-if" if="{{isncsciExamLevel.isKeyMuscle}}"><span>[[helper]]</span></template> -->
    `;
  }

  ready(){
    super.ready();
  }

  _updateValues(e){
    if(this.propagateDown && this.nextElementSibling != null){
      switch (e.type) {
        case 'col-one-changed':
          this.nextElementSibling.colOne = this.nextElementSibling.colOne == undefined ? undefined : this.colOne;
          break;
        case 'col-two-changed':
          this.nextElementSibling.colTwo = this.nextElementSibling.colTwo == undefined ? undefined : this.colTwo;
          break;
        case 'col-three-changed':
          this.nextElementSibling.colThree = this.nextElementSibling.colThree == undefined ? undefined : this.colThree;
          break;
      }
    }
  }
}
customElements.define('rhi-ui-isncsci-grid-row', RhiUiIsncsciGridRow);
