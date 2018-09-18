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

import { html } from '@rhi-ui/html';

export class RhiIsncsciUiMobileSensory extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-sensory'; }

    public static getTemplate(): string {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    --mdc-theme-secondary: var(--isncsci-secondayr-color, #999);
                    -webkit-font-smoothing: var(--isncsci-font-common-base-webkit-font-smoothing, antialiased);
                    display: block;
                    font-family: var(--isncsci-font-common-base-font-family, 'Roboto', 'Noto', 'Open Sans', sans-serif);
                    min-height: 300px;
                    position: relative;
                }

                :host([input-type="motor"]) .content .dermatomes .dermatome,
                :host([input-type="motor-top"]) .content .dermatomes .dermatome,
                :host([input-type="motor-bottom"]) .content .dermatomes .dermatome {
                    display: none;
                }

                :host([input-type="motor"]) .content .dermatomes .dermatome.motor {
                    display: block;
                }

                :host([input-type="motor-bottom"]) .content .dermatomes .dermatome.motor.bottom {
                    display: block;
                }

                :host([input-type="motor-top"]) .content .dermatomes .dermatome.motor.top {
                    display: block;
                }

                /*
                 * The :host notation with CSS variables did not work on MS Edge.
                 * The code below has been added so that the component works on Edge just as on FireFox, Safari, and Chrome,
                 */

                [input-type="motor"] .content .dermatomes .dermatome,
                [input-type="motor-top"] .content .dermatomes .dermatome,
                [input-type="motor-bottom"] .content .dermatomes .dermatome {
                    display: none;
                }

                [input-type="motor"] .content .dermatomes .dermatome.motor {
                    display: block;
                }

                [input-type="motor-bottom"] .content .dermatomes .dermatome.motor.bottom {
                    display: block;
                }

                [input-type="motor-top"] .content .dermatomes .dermatome.motor.top {
                    display: block;
                }

                .totals-bar {
                    align-items: center;
                    background-color: var(--isncsci-primary-color, #FAFAFA);
                    box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
                    display: flex;
                    height: 48px;
                    padding: 0 16px;
                    position: relative;
                    z-index: 1;
                }

                .totals-bar .label {
                    color: var(--isncsci-on-primary-color, #666);
                    font-size: var(--isncsci-primary-text-font-size, 16px);
                    font-weight: var(--isncsci-primary-text-font-weight, 400);
                    line-height: 18px;
                    margin-right: 8px;
                }

                .totals-bar .label.right {
                    margin-left: 8px;
                    margin-right: 0;
                }

                .totals-bar .value {
                    color: var(--isncsci-primary-text-color, #000);
                    font-size: var(--isncsci-primary-text-font-size, 16px);
                    font-weight: var(--isncsci-primary-text-font-weight, 400);
                    line-height: 18px;
                    margin-right: 16px;
                }

                .content {
                    bottom: 0;
                    display: flex;
                    flex-direction: row;
                    left: 0;
                    position: absolute;
                    right: 0;
                    top: 48px;
                }

                .content .dermatomes {
                    background-color: var(--isncsci-secondary-color, #999);
                    flex-grow: 1;
                    overflow: hidden;
                    overflow-y: auto;
                }

                .content .dermatomes .dermatome {
                    color: var(--isncsci-on-secondary-color, #333);
                    line-height: 48px;
                    padding-left: 56px;
                }

                .content .dermatome-details {
                    background-color: #FFF;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
                    width: 216px;
                }
            </style>
            <div class="totals-bar">
                <div class="label" bind-to="total-label"></div>
                <div class="value" bind-to="total"></div>
                <div class="label" bind-to="nl-label"></div>
                <div class="value" bind-to="nl"></div>
                <div>
                    <mwc-switch>sentiment_very_satisfied</mwc-switch>
                </div>
                <div class="label right" bind-to="propagate-value-label"></div>
            </div>
            <div class="content">
                <div class="dermatomes">
                    <div class="dermatome">C2</div>
                    <div class="dermatome">C3</div>
                    <div class="dermatome">C4</div>
                    <div class="dermatome motor top">C5</div>
                    <div class="dermatome motor top">C6</div>
                    <div class="dermatome motor top">C7</div>
                    <div class="dermatome motor top">C8</div>
                    <div class="dermatome motor top">T1</div>
                    <div class="dermatome">T2</div>
                    <div class="dermatome">T3</div>
                    <div class="dermatome">T4</div>
                    <div class="dermatome">T5</div>
                    <div class="dermatome">T6</div>
                    <div class="dermatome">T7</div>
                    <div class="dermatome">T8</div>
                    <div class="dermatome">T9</div>
                    <div class="dermatome">T10</div>
                    <div class="dermatome">T11</div>
                    <div class="dermatome">T12</div>
                    <div class="dermatome">L1</div>
                    <div class="dermatome motor bottom">L2</div>
                    <div class="dermatome motor bottom">L3</div>
                    <div class="dermatome motor bottom">L4</div>
                    <div class="dermatome motor bottom">L5</div>
                    <div class="dermatome motor bottom">S1</div>
                    <div class="dermatome">S2</div>
                    <div class="dermatome">S3</div>
                    <div class="dermatome">S4-5</div>
                </div>
                <div class="dermatome-details">
                </div>
            </div>
        `;
    }

    public static get properties() {
        return {
            'nl': { reflectToAttribute: true, type: String, value: '' },
            'nl-label': { reflectToAttribute: true, type: String, value: 'NL:' },
            'propagate-value-label': { reflectToAttribute: true, type: String, value: 'Propagate values down:' },
            'total': { reflectToAttribute: true, type: String, value: '' },
            'total-label': { reflectToAttribute: true, type: String, value: 'Total:' }
        };
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        // tslint:disable-next-line:forin
        for (const key in RhiIsncsciUiMobileSensory.properties) {
            attributes.push(key.toLowerCase());
        }

        return attributes;
    }

    private uiBindings: {};
    private dermatomeClickHandler;

    public constructor() {
        super();

        this.dermatomeClickHandler = (e) => this.onDermatomeClick(e);

        this.attachShadow({ mode: 'open' });
        this.requestRender();
        this.updateUiBindings();
    }

    public connectedCallback() {
        this.shadowRoot.querySelector('.dermatomes')
        .addEventListener('click', this.dermatomeClickHandler);
    }

    public disconnectedCallback() {
        
        this.shadowRoot.querySelector('.dermatomes')
        .removeEventListener('click', this.dermatomeClickHandler);
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileSensory.getTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    private updateUiBindings(): void {
        this.uiBindings = {};
        const elements: NodeListOf<Element> = this.shadowRoot.querySelectorAll('[bind-to]');

        for (let i: number = 0; i < elements.length; i++) {
            const element: Element = elements[i];
            const bindTo: string = element.getAttribute('bind-to');
            this.uiBindings[bindTo] = element;

            const property = RhiIsncsciUiMobileSensory.properties[bindTo]

            if (property && property.value) {
                element.innerHTML = property.value;
            }
        }
    }

    public onDermatomeClick(e): boolean {
        if (!e.target.classList.contains('dermatome')) {
            return true;
        }

        console.log('dispatch');

        const event: CustomEvent = new CustomEvent('dermatome-selected', { detail: { name: e.target.innerHTML.toLowerCase() } });
        this['dispatchEvent'](event);

        return true;
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        const element: Element = this.uiBindings[name];

        if (element) {
            element.innerHTML = newValue;
        }
    }
}

customElements.define(RhiIsncsciUiMobileSensory.is, RhiIsncsciUiMobileSensory);