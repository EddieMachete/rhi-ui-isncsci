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
import { RhiUiDemoSnippet } from '../../../node_modules/@rhi-ui/demo-snippet/rhi-ui-demo-snippet.js';
import { html } from '../../../node_modules/@rhi-ui/html/html.js';
import { RhiUiMarkdownViewer } from '../../../node_modules/@rhi-ui/markdown-viewer/rhi-ui-markdown-viewer.js';
import { RhiIsncsciUiMobileTotals } from './rhi-isncsci-ui-mobile-totals.js';
export class RhiIsncsciUiMobileTotalsDemo extends HTMLElement {
    constructor() {
        super();
        this.props = {};
        this.attachShadow({ mode: 'open' });
        // I'm forcing loading these two libraries without having to add the import script on the consuming html page.
        console.log(`${RhiIsncsciUiMobileTotals.is}, ${RhiUiDemoSnippet.is}, and ${RhiUiMarkdownViewer.is}`);
        this.requestRender();
    }
    static getTemplate(props) {
        return html `
            <!-- shadow DOM for your element -->
            <!-- RHI Blue: #007DC2 -->
            <style>
                :host {
                    display: block;
                }

                rhi-ui-demo-snippet,
                rhi-ui-markdown-viewer {
                    display: block;
                    margin-bottom: 48px;
                }
            </style>
            <rhi-ui-markdown-viewer id="readme-viewer" class="readme"></rhi-ui-markdown-viewer>
            <rhi-ui-demo-snippet snippet-title="Default">
                <rhi-isncsci-ui-mobile-totals id="totals"
                                              ais="A"
                                              comments="my two cents"
                                              complete-incomplete="C"
                                              dap="NT"
                                              left-lower-motor="C5"
                                              left-motor-nl="T5"
                                              left-motor-nl-zpp="T9"
                                              left-prick="T1"
                                              left-sensory-nl="T3"
                                              left-sensory-nl-zpp="T7"
                                              left-touch="C7"
                                              left-upper-motor="C3"
                                              nli="T6"
                                              right-lower-motor="C4"
                                              right-motor-nl="T4"
                                              right-motor-nl-zpp="T8"
                                              right-prick="C8"
                                              right-sensory-nl="T2"
                                              right-sensory-nl-zpp="T6"
                                              right-touch="C6"
                                              right-upper-motor="C2"
                                              vac="Yes"></rhi-isncsci-ui-mobile-totals>
            </rhi-ui-demo-snippet>
            <rhi-ui-demo-snippet snippet-title="Dark Theme in French">
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
                                              text-ais="AIS"
                                              text-comments="Observations générales:"
                                              text-complete-incomplete="Complet ou incomplet"
                                              text-dap="PAP"
                                              text-dap-description="Pression anale profonde"
                                              text-left="La gauche"
                                              text-light-touch="LeLight touchft"
                                              text-lower-motor="Moteur inférieur"
                                              text-motor-nl="NN moteur"
                                              text-motor-nl-zpp="NN Motor ZCP"
                                              text-nli="NNB"
                                              text-option-no="Non"
                                              text-option-nt="NT"
                                              text-option-yes="Oui"
                                              text-pin-prick="Piqûre d'épingle"
                                              text-right="droite"
                                              text-sensory-nl="NN sensoriel"
                                              text-sensory-nl-zpp="NN sensoriel ZCP"
                                              text-upper-motor="moteur supérieur"
                                              text-vac="CAV"
                                              text-vac-description="Contraction anale volontaire">
                </rhi-isncsci-ui-mobile-totals>
            </rhi-ui-demo-snippet>
        `;
    }
    static get observedAttributes() {
        const attributes = [];
        // tslint:disable-next-line:forin
        for (const key in RhiIsncsciUiMobileTotalsDemo.properties) {
            attributes.push(key.toLowerCase());
        }
        return attributes;
    }
    static get is() { return 'rhi-isncsci-ui-mobile-totals-demo'; }
    static get properties() {
        return {
            'file-uri': {
                type: String,
                value: ''
            }
        };
    }
    connectedCallback() {
        // I'm forcing loading these two libraries without having to add the import script on the consuming html page.
        // tslint:disable-next-line:no-console
        console.log(`Loaded ${RhiIsncsciUiMobileTotals.is} and ${RhiUiDemoSnippet.is} and ${RhiUiMarkdownViewer.is}`);
        this.shadowRoot.getElementById('readme-viewer').setAttribute('src', this['file-uri']);
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
    attributeChangedCallback(name, oldValue, newValue, namespace) {
        if (oldValue === newValue) {
            return;
        }
        this.props[name] = newValue;
        if (name === 'file-uri' && newValue) {
            const readmeViewer = this.shadowRoot.getElementById('readme-viewer');
            if (readmeViewer) {
                readmeViewer.setAttribute('file-uri', newValue);
            }
        }
    }
    requestRender() {
        const template = document.createElement('template');
        template.innerHTML = RhiIsncsciUiMobileTotalsDemo.getTemplate({});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    bindToEvents() {
        const totals = this.shadowRoot.getElementById('totals');
        totals.addEventListener('interactive-cell-clicked', (e) => { alert(`Interactive cell clicked "${e.detail.name}"`); });
        totals.addEventListener('comments-change', (e) => {
            alert(`Comments changed to  "${e.detail.comments}"`);
            totals.setAttribute('comments', e.detail.comments);
        });
        totals.addEventListener('dap-change', (e) => {
            alert(`Dap changed to  "${e.detail.dap}"`);
            totals.setAttribute('dap', e.detail.dap);
        });
        totals.addEventListener('vac-change', (e) => {
            alert(`Vac changed to  "${e.detail.vac}"`);
            totals.setAttribute('vac', e.detail.vac);
        });
        this.shadowRoot.getElementById('totalsFr')
            .addEventListener('interactive-cell-clicked', (e) => { alert(`Interactive cell clicked "${e.detail.name}"`); });
    }
}
customElements.define(RhiIsncsciUiMobileTotalsDemo.is, RhiIsncsciUiMobileTotalsDemo);
