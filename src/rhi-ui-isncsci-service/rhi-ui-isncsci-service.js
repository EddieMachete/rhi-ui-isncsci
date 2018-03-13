import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { IsncsciFormData } from '../rhi-ui-isncsci-models/rhi-ui-isncsci-form-data.js';

export class RhiUiIsncsciService extends PolymerElement {
  static get properties(){
    return {
      formData: Object
    }
  }

  calculate(){
    let url = "http://localhost:40681/api/calculator/"
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.open("POST", url, true);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);

      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      var formDataUrlEncoded = "";
      for ( var key in this.formData ) {
        formDataUrlEncoded += key+"="+this.formData[key]+"&";
      }
      formDataUrlEncoded = formDataUrlEncoded.substring(0, formDataUrlEncoded.length - 1);
      xhr.send(formDataUrlEncoded);
    });
  }

  _test(){
    this.formData = new IsncsciFormData(this._sampleData());
    this.calculate(this.formData).then((a,b,c)=>{console.log(a,b,c)}).catch(e=>console.log("error",e));
  }
}
customElements.define('rhi-ui-isncsci-service', RhiUiIsncsciService);