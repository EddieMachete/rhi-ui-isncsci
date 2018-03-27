'use strict';
import { html, render } from "../../helpers/lit-html.js";
import { IsncsciExam } from "../../algorithm/isncsciExam.js";
import { IsncsciTotals } from "../../algorithm/isncsciTotals.js";
import { Algorithm } from "../../algorithm/algorithm.js";
import { RhiCoreIsncsciAlgorithmDemo } from "../rhi-core-isncsci-algorithm-demo/rhi-core-isncsci-algorithm-demo.js";
import "../rhi-isncsci-grid/rhi-isncsci-grid.js";
import "../rhi-isncsci-diagram/rhi-isncsci-diagram.js";
import "../rhi-isncsci-totals/rhi-isncsci-totals.js";
import "../rhi-isncsci-totals/rhi-isncsci-test-totals.js";
import "../rhi-isncsci-buttons/rhi-propagate-button.js";
import "../rhi-isncsci-buttons/rhi-paint-button.js";

class RhiIsncsciApp extends HTMLElement{
  get isncsciExam(){
    if(!this._isncsciExam){
      this._isncsciExam = new IsncsciExam();
    }
    return this._isncsciExam;
  }
  get isncsciTotals(){
    if(!this._isncsciTotals){
      this._isncsciTotals = new IsncsciTotals();
    }
    return this._isncsciTotals;
  }

  get propagateDirection(){
    return this._propagateDirection;
  }
  set propagateDirection(val){
    this._propagateDirection = val;
  }
  get painting(){
    return _painting;
  }
  set painting(val){
    this._painting = val;
  }

  get template(){
    return html`
      <style>
        :host {
          display: block;
        }
        rhi-isncsci-grid, rhi-isncsci-totals, rhi-isncsci-test-totals{
          display: inline-block;
          width: 333px;
        }
      </style>
      <div>
        <rhi-propagate-button></rhi-propagate-button>
        ${this._painting ?
          html`<rhi-paint-button painting></rhi-paint-button>` :
          html`<rhi-paint-button></rhi-paint-button>`
        }
        <button id="random-sample-button">Random Sample</button>
      </div>
      <rhi-isncsci-grid></rhi-isncsci-grid>
      <rhi-isncsci-diagram></rhi-isncsci-diagram>
      <rhi-isncsci-totals></rhi-isncsci-totals>
      <rhi-isncsci-test-totals></rhi-isncsci-test-totals>
    `;
  }

  // No setters defined for isncsciExam and template because
  // it seems unnecessary to be able to modify this property externally

  // Attach the shadow root, render the template then add event listeners
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    render(this.template, this.shadowRoot);
    this._addEventListeners();

    this._isncsciExam = new IsncsciExam();
    this.update();
  }

  // Listens to:
  // "update-isncsci-exam" to update()
  // Random Sample button's "click" to sampleData()
  _addEventListeners(){
    this.addEventListener("update-isncsci-exam", this.update);
    let randomSampleButton = this.shadowRoot.querySelector('button#random-sample-button');
    randomSampleButton.onclick = this.sampleData.bind(this);

    this.addEventListener("update-cell-value", this._updateIsncsciExam);
    this.addEventListener("update-propagate-direction", this._updatePropagateDirection);

    this.addEventListener("update-painting", this._updatePainting);

    this.addEventListener("paint-cell-value", this._paint);

    this.addEventListener("mouseup", _ => {window.paintingValue = ''});
    this.addEventListener("touchend", _ => {window.paintingValue = ''});
  }

  // Updates the isncsciExam properties to children elements
  update(){
    let isncsciGrid = this.shadowRoot.querySelector('rhi-isncsci-grid');
    if(isncsciGrid){
      isncsciGrid.isncsciExam = this._isncsciExam;
    }

    let isncsciDiagram = this.shadowRoot.querySelector('rhi-isncsci-diagram');
    if(isncsciDiagram){
      isncsciDiagram.isncsciExam = this._isncsciExam;
    }

    let isncsciTotals = this.shadowRoot.querySelector('rhi-isncsci-totals');
    this._isncsciTotals = Algorithm.getTotalsFor(this._isncsciExam);
    if(isncsciTotals){
      isncsciTotals.isncsciTotals = this._isncsciTotals;
    }

    let isncsciTestTotals = this.shadowRoot.querySelector('rhi-isncsci-test-totals');
    if(isncsciTestTotals){
      isncsciTestTotals.isncsciTotals = this._isncsciTotals;
      isncsciTestTotals.isncsciTestTotals = this._isncsciTestTotals;
    }
  }

  _updateIsncsciExam(e){
    let changingCell = e.detail;

    if(changingCell.side == 'anal'){
      let prop = changingCell.side + changingCell.type[0].toUpperCase() + changingCell.type.slice(1);
      this._isncsciExam[prop] = changingCell.value;
    }else{
      let level = this._updateIsncsciExamLevel(changingCell);

      if(this.propagateDirection == 'down'){
        while(level.next){
          changingCell.levelName = level.next.name;
          level = this._updateIsncsciExamLevel(changingCell);
        }
      }else if(this.propagateDirection == 'up'){
        while(level.previous){
          changingCell.levelName = level.previous.name;
          level = this._updateIsncsciExamLevel(changingCell);
        }
      }
    }

    this.dispatchEvent(new CustomEvent("update-isncsci-exam"));
  }

  _updateIsncsciExamLevel(changingCell){
    let levelName = changingCell.levelName;
    let level = this._isncsciExam.getLevelWithName(changingCell.levelName);

    let rightTouch = level.rightTouch ? level.rightTouch : '';
    let leftTouch = level.leftTouch ? level.leftTouch : '';
    let rightPrick = level.rightPrick ? level.rightPrick : '';
    let leftPrick = level.leftPrick ? level.leftPrick : '';
    let rightMotor = level.rightMotor ? level.rightMotor : '';
    let leftMotor = level.leftMotor ? level.leftMotor : '';

    if(changingCell.side.toLowerCase() == 'left'){
      switch (changingCell.type.toLowerCase()) {
        case 'touch':
          leftTouch = changingCell.value
          break;
        case 'prick':
          leftPrick = changingCell.value
          break;
        case 'motor':
          leftMotor = changingCell.value
          break;
      }
    }else{
      switch (changingCell.type.toLowerCase()) {
        case 'touch':
          rightTouch = changingCell.value
          break;
        case 'prick':
          rightPrick = changingCell.value
          break;
        case 'motor':
          rightMotor = changingCell.value
          break;
      }
    }

    this._isncsciExam.updateLevelByName(levelName, rightTouch, leftTouch, rightPrick, leftPrick, rightMotor, leftMotor);
    return level;
  }

  _updatePropagateDirection(e){
    this.propagateDirection = e.detail.direction;
  }

  _updatePainting(e){
    this._painting = e.detail.painting;
  }
  _paint(e){
    if(this._painting){
      let changingCell = e.detail;
      changingCell.value = window.paintingValue;
      this._updateIsncsciExamLevel(changingCell);
      this.dispatchEvent(new CustomEvent("update-isncsci-exam"));
    }
  }
  // sets _isncsciExam with random sample
  // dispatches a custom event "update-isncsci-exam"
  sampleData(){
    let demo = new RhiCoreIsncsciAlgorithmDemo();
    let randomTest = demo.loadRandomTest();
    this._isncsciTestId = randomTest.id;
    this._isncsciExam = randomTest.exam;
    this._isncsciTestTotals = randomTest.totals;
    this.dispatchEvent(new CustomEvent("update-isncsci-exam"));
  }
}


customElements.define("rhi-isncsci-app", RhiIsncsciApp);
