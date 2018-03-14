import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { IsncsciExam } from '../rhi-core-isncsci-algorithm/src/isncsciExam.js';
import { Algorithm } from '../rhi-core-isncsci-algorithm/src/algorithm.js';

export class RhiUiIsncsciService extends PolymerElement {
  static get properties(){
    return {
      isncsciExam: Object
    }
  }

  calculate(){
    return Algorithm.getTotalsFor(this.isncsciExam);
  }

  _test(){
    this.formData = new IsncsciExam();
    this.calculate(this.formData).then((a,b,c)=>{console.log(a,b,c)}).catch(e=>console.log("error",e));
  }
}
customElements.define('rhi-ui-isncsci-service', RhiUiIsncsciService);