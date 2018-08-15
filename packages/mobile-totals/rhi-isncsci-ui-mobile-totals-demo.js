/**
 * @license
 * Copyright (c) 2018 Rick Hansen Institute. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
'use strict';
import { html, LitElement } from '@polymer/lit-element/lit-element.js';
import { RhiIsncsciUiMobileTotals } from './rhi-isncsci-ui-mobile-totals.js';
export class RhiIsncsciUiMobileTotalsDemo extends LitElement {
    static get is() { return 'rhi-isncsci-ui-mobile-totals-demo'; }
    _render(props) {
        return html `
            <!-- shadow DOM for your element -->
            <!-- RHI Blue: #007DC2 -->
            <style>
                :host {
                    display: block;
                }
                
                .example h4 {
                    background-color: var(--snippet-title-background-color, #8baec1);
                    color: var(--snippet-title-color, #003a59);
                    padding: 12px 16px;
                }

                marked-element {
                    margin-bottom: 48px;
                }
            </style>
            <marked-element>
                <div slot="markdown-html"></div>
                <script id="marked-element" type="text/markdown"></script>
            </marked-element>
            <div class="example">
                <h4>Default</h4>
                <demo-snippet id="snippet-default">
                    <template>
                        <rhi-isncsci-ui-mobile-totals id="totals"
                                                      ais="A"
                                                      comments="my two cents"
                                                      completeIncomplete="C"
                                                      dap="NT"
                                                      leftLowerMotor="C5"
                                                      leftMotorNl="T5"
                                                      leftMotorNlZpp="T9"
                                                      leftPrick="T1"
                                                      leftSensoryNl="T3"
                                                      leftSensoryNlZpp="T7"
                                                      leftTouch="C7"
                                                      leftUpperMotor="C3"
                                                      nli="T6"
                                                      rightLowerMotor="C4"
                                                      rightMotorNl="T4"
                                                      rightMotorNlZpp="T8"
                                                      rightPrick="C8"
                                                      rightSensoryNl="T2"
                                                      rightSensoryNlZpp="T6"
                                                      rightTouch="C6"
                                                      rightUpperMotor="C2"
                                                      vac="Yes"></rhi-isncsci-ui-mobile-totals>
                    </template>
                </demo-snippet>
            </div>
            <div class="example background-black">
                <h4>Dark Theme in French</h4>
                <demo-snippet>
                    <template>
                        <style>
                            .dark-theme {
                                --isncsci-primary-text-color: #FFF;
                                --isncsci-secondary-text-color: #CCC;
                                --isncsci-cell-color: #333;
                                --isncsci-interactive-cell-color: #999;

                                background-color: #000;
                            }
                        </style>
                        <rhi-isncsci-ui-mobile-totals id="totalsFr"
                                                      class="dark-theme"
                                                      textAis="AIS"
                                                      textComments="Observations générales:"
                                                      textCompleteIncomplete="Complet ou incomplet"
                                                      textDap="PAP"
                                                      textDapDescription="Pression anale profonde"
                                                      textLeft="La gauche"
                                                      textLightTouch="LeLight touchft"
                                                      textLowerMotor="Moteur inférieur"
                                                      textMotorNl="NN moteur"
                                                      textMotorNlZpp="NN Motor ZCP"
                                                      textNli="NNB"
                                                      textOptionNo="Non"
                                                      textOptionNt="NT"
                                                      textOptionYes="Oui"
                                                      textPinPrick="Piqûre d'épingle"
                                                      textRight="droite"
                                                      textSensoryNl="NN sensoriel"
                                                      textSensoryNlZpp="NN sensoriel ZCP"
                                                      textUpperMotor="moteur supérieur"
                                                      textVac="CAV"
                                                      textVacDescription="Contraction anale volontaire"></rhi-isncsci-ui-mobile-totals>
                    </template>
                </demo-snippet>
            </div>
        `;
    }
    static get properties() {
        return {
            readmeFile: String
        };
    }
    constructor() {
        super();
    }
    ready() {
        super.ready();
        // I'm forcing loading these two libraries without having to add the import script on the consuming html page.
        console.log(`Loaded ${RhiIsncsciUiMobileTotals.is}`);
        this.shadowRoot.getElementById('marked-element').setAttribute('src', this['readmeFile']);
        let timeElapsed = 0;
        const intervalSpeed = 60;
        const intervalId = setInterval(() => {
            timeElapsed += intervalSpeed;
            if (timeElapsed >= 10000) {
                clearInterval(intervalId);
                console.log('Event binding timed out');
            }
            if (this.shadowRoot.getElementById('totals')) {
                this.bindToEvents();
                clearInterval(intervalId);
                console.log('Events have been binded');
            }
        }, intervalSpeed);
    }
    bindToEvents() {
        const totals = this.shadowRoot.getElementById('totals');
        totals.addEventListener('interactive-cell-clicked', (e) => { alert(`Interactive cell clicked "${e['detail'].name}"`); });
        totals.addEventListener('comments-change', (e) => {
            alert(`Comments changed to  "${e['detail'].comments}"`);
            totals['comments'] = e['detail'].comments;
        });
        totals.addEventListener('dap-change', (e) => {
            alert(`Dap changed to  "${e['detail'].dap}"`);
            totals['dap'] = e['detail'].dap;
        });
        totals.addEventListener('vac-change', (e) => {
            alert(`Vac changed to  "${e['detail'].vac}"`);
            totals['vac'] = e['detail'].vac;
        });
        this.shadowRoot.getElementById('totalsFr')
            .addEventListener('interactive-cell-clicked', (e) => { alert(`Interactive cell clicked "${e['detail'].name}"`); });
    }
}
customElements.define(RhiIsncsciUiMobileTotalsDemo.is, RhiIsncsciUiMobileTotalsDemo);
