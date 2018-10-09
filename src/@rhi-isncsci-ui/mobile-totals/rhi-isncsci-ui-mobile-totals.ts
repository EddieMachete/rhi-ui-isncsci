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

import { html, render, TemplateResult } from 'lit-html';

export class RhiIsncsciUiMobileTotals extends HTMLElement {
    private static getOptionTemplate(label: string, value: string, selectedValue: string) {
        return value === selectedValue
            ? html`<option value="${value}" selected>${label}</option>`
            : html`<option value="${value}">${label}</option>`;
    }

    private props = {};
    private commentsElement: HTMLTextAreaElement;
    private commentsClass: string = 'comments-component';

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        // ToDo: For some reason the lit element is not initializing
        const props = RhiIsncsciUiMobileTotals.properties;

        // tslint:disable-next-line:forin
        for (const key in props) {
            this.props[key] = props[key].value;
        }
    }

    public static get is(): string { return 'rhi-isncsci-ui-mobile-totals'; }

    public _render(props): TemplateResult {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;
                }

                .secondary-text {
                    color: var(--isncsci-secondary-text-color, #666);
                }

                .small-text {
                    font-size: 9px;
                }

                .text-align-right {
                    text-align: right;
                }

                .grid {
                    margin-bottom: 32px;
                }

                .row {
                    display: flex;
                    margin-top: 8px;
                }

                .row.header div {
                    margin-left: 8px;
                    text-align: center;
                    width: 48px;
                }

                .row.header div:first-child {
                    margin-left: 128px;
                }

                .row .label {
                    align-items: center;
                    display: flex;
                    height: 40px;
                    text-align: right;
                    width: 120px;
                }

                /**
                * The label is to be aligned center-right.
                * For the text align right, we need the content to expand to fill the entire label width.
                */
                .row .label .text-align-right {
                    flex: 1;
                }

                .cell {
                    background-color: var(--isncsci-cell-color, #F2F2F2);
                    height: 40px;
                    line-height: 40px;
                    margin-left: 8px;
                    text-align: center;
                    width: 48px;
                }

                /* The interactive cells can be tapped.  They need to express that affordance to the user.object */
                .cell.interactive {
                    background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
                    cursor: pointer;
                }

                .cell-select {
                    background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
                    border: none;
                    font-family: 'Roboto', 'Noto', sans-serif;
                    font-size: 16px;
                    height: 40px;
                    margin-left: 8px;
                    width: 104px;
                }

                .comments-component {
                    border-bottom: solid 2px #CCC;
                    width: 221px;
                }

                .comments-component::after {
                    background-color: var(--isncsci-primary-color, #999);
                    content: '';
                    display: block;
                    height: 2px;
                    margin: 0 auto -1px auto;
                    width: 0;

                    transition: width 200ms ease;
                }

                .comments-component.active::after {
                    width: 100%;
                }

                .comments-component .label {
                    margin-bottom: 8px;
                }

                .comments-component textarea {
                    border: none;
                    background-color: transparent;
                    color: var(--isncsci-primary-text-color, #000);
                    font-family: 'Roboto', 'Noto', sans-serif;
                    font-size: 14px;
                    height: 120px;
                    outline: none;
                    overflow: auto;
                    padding: 0;
                    resize: none;
                    width: 100%;
                }
            </style>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>${props['text-right']}</div>
                    <div>${props['text-left']}</div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-upper-motor']}</span>
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-upper-motor')}">
                        ${props['right-upper-motor']}
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-upper-motor')}">
                        ${props['left-upper-motor']}
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-lower-motor']}</span>
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-lower-motor')}">
                        ${props['right-lower-motor']}
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-lower-motor')}">
                        ${props['left-lower-motor']}
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-light-touch']}</span>
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-touch')}">
                        ${props['right-touch']}
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-touch')}">
                        ${props['left-touch']}
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-pin-prick']}</span>
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-prick')}">
                        ${props['right-prick']}
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-prick')}">
                        ${props['left-prick']}
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="row">
                    <div class="label">
                        <div class="text-align-right secondary-text">
                            <div>${props['text-vac']}</div>
                            <div class="small-text">${props['text-vac-description']}</div>
                        </div>
                    </div>
                    <div>
                        <select id="anal-contraction"
                                name="analContraction"
                                class="cell-select">
                            <option value="None"></option>
                            ${RhiIsncsciUiMobileTotals.getOptionTemplate(props['text-option-yes'], 'Yes', props.vac)}
                            ${RhiIsncsciUiMobileTotals.getOptionTemplate(props['text-option-no'], 'No', props.vac)}
                            ${RhiIsncsciUiMobileTotals.getOptionTemplate(props['text-option-nt'], 'NT', props.vac)}
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <div class="text-align-right secondary-text">
                            <div>${props['text-dap']}</div>
                            <div class="small-text">${props['text-dap-description']}</div>
                        </div>
                    </div>
                    <div>
                        <select id="anal-sensation"
                                name="analSensation"
                                class="cell-select"
                                onchange="${(e) => this.handleDapChange(e)}">
                            <option value="None"></option>
                            ${RhiIsncsciUiMobileTotals.getOptionTemplate(props['text-option-yes'], 'Yes', props.dap)}
                            ${RhiIsncsciUiMobileTotals.getOptionTemplate(props['text-option-no'], 'No', props.dap)}
                            ${RhiIsncsciUiMobileTotals.getOptionTemplate(props['text-option-nt'], 'NT', props.dap)}
                        </select>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>${props['text-right']}</div>
                    <div>${props['text-left']}</div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-sensory-nl']}</span>
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-sensory-nl')}">
                        ${props['right-sensory-nl']}
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-sensory-nl')}">
                        ${props['left-sensory-nl']}
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-motor-nl']}</span>
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'right-motor-nl')}">
                        ${props['right-motor-nl']}
                    </div>
                    <div class="cell interactive" on-click="${(e) => this.handleCellClick(e, 'left-motor-nl')}">
                        ${props['left-motor-nl']}
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props['text-nli']}</span></div>
                    <div class="cell">${props.nli}</div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-complete-incomplete']}</span>
                    </div>
                    <div class="cell">${props['complete-incomplete']}</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">${props['text-ais']}</span></div>
                    <div class="cell">${props.ais}</div>
                </div>
            </div>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>${props['text-right']}</div>
                    <div>${props['text-left']}</div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-sensory-nl-zpp']}</span>
                    </div>
                    <div class="cell">${props['right-sensory-nl-zpp']}</div>
                    <div class="cell">${props['left-sensory-nl-zpp']}</div>
                </div>
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">${props['text-motor-nl-zpp']}</span>
                    </div>
                    <div class="cell">${props['right-motor-nl-zpp']}</div>
                    <div class="cell">${props['left-motor-nl-zpp']}</div>
                </div>
            </div>
            <div class="${this.commentsClass}">
                <div class="label secondary-text">${props['text-comments']}</div>
                <textarea id="comments" rows="1">${props.comments}</textarea>
            </div>
        `;
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        // tslint:disable-next-line:forin
        for (const key in RhiIsncsciUiMobileTotals.properties) {
            attributes.push(key.toLowerCase());
        }

        return attributes;
    }

    public static get properties() {
        return {
            'ais': { reflectToAttribute: true, type: String, value: '' },
            'comments': { reflectToAttribute: true, type: String, value: '' },
            'complete-incomplete': { reflectToAttribute: true, type: String, value: '' },
            'dap': { reflectToAttribute: true, type: String, value: '' },
            'left-lower-motor': { reflectToAttribute: true, type: String, value: '' },
            'left-motor-nl': { reflectToAttribute: true, type: String, value: '' },
            'left-motor-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'left-prick': { reflectToAttribute: true, type: String, value: '' },
            'left-sensory-nl': { reflectToAttribute: true, type: String, value: '' },
            'left-sensory-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'left-touch': { reflectToAttribute: true, type: String, value: '' },
            'left-upper-motor': { reflectToAttribute: true, type: String, value: '' },
            'nli': { reflectToAttribute: true, type: String, value: '' },
            'right-lower-motor': { reflectToAttribute: true, type: String, value: '' },
            'right-motor-nl': { reflectToAttribute: true, type: String, value: '' },
            'right-motor-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'right-prick': { reflectToAttribute: true, type: String, value: '' },
            'right-sensory-nl': { reflectToAttribute: true, type: String, value: '' },
            'right-sensory-nl-zpp': { reflectToAttribute: true, type: String, value: '' },
            'right-touch': { reflectToAttribute: true, type: String, value: '' },
            'right-upper-motor': { reflectToAttribute: true, type: String, value: '' },
            'text-ais': { reflectToAttribute: true, type: String, value: 'AIS' },
            'text-comments': { reflectToAttribute: true, type: String, value: 'General comments:' },
            'text-complete-incomplete': { reflectToAttribute: true, type: String, value: 'Complete or incomplete' },
            'text-dap': { reflectToAttribute: true, type: String, value: 'DAP' },
            'text-dap-description': { reflectToAttribute: true, type: String, value: 'Deep anal pressure' },
            'text-left': { reflectToAttribute: true, type: String, value: 'Left' },
            'text-light-touch': { reflectToAttribute: true, type: String, value: 'Light touch' },
            'text-lower-motor': { reflectToAttribute: true, type: String, value: 'Lower motor' },
            'text-motor-nl': { reflectToAttribute: true, type: String, value: 'Motor NL' },
            'text-motor-nl-zpp': { reflectToAttribute: true, type: String, value: 'Motor NL ZPP' },
            'text-nli': { reflectToAttribute: true, type: String, value: 'NLI' },
            'text-option-no': { reflectToAttribute: true, type: String, value: 'No' },
            'text-option-nt': { reflectToAttribute: true, type: String, value: 'NT' },
            'text-option-yes': { reflectToAttribute: true, type: String, value: 'Yes' },
            'text-pin-prick': { reflectToAttribute: true, type: String, value: 'Pin prick' },
            'text-right': { reflectToAttribute: true, type: String, value: 'Right' },
            'text-sensory-nl': { reflectToAttribute: true, type: String, value: 'Sensory NL' },
            'text-sensory-nl-zpp': { reflectToAttribute: true, type: String, value: 'Sensory NL ZPP' },
            'text-upper-motor': { reflectToAttribute: true, type: String, value: 'Upper motor' },
            'text-vac': { reflectToAttribute: true, type: String, value: 'VAC' },
            'text-vac-description': { reflectToAttribute: true, type: String, value: 'Voluntary anal contraction' },
            'vac': { reflectToAttribute: true, type: String, value: '' }
        };
    }

    public ready(): void {
        // Wire up Voluntary Anal Contraction events
        const vac: HTMLSelectElement = this.shadowRoot.getElementById('anal-contraction') as HTMLSelectElement;
        vac.addEventListener('change', (e) => this.handleVacChange(e));

        // Wire up Deep Anal Pressure events
        const dap: HTMLSelectElement = this.shadowRoot.getElementById('anal-sensation') as HTMLSelectElement;
        dap.addEventListener('change', (e) => this.handleDapChange(e));

        // Wire up the comments events
        this.commentsElement = this.shadowRoot.getElementById('comments') as HTMLTextAreaElement;
        this.commentsElement
        .addEventListener('focus', (e) => { this.commentsClass = 'comments-component active'; this.requestRender(); });
        this.commentsElement
        .addEventListener('blur', (e) => { this.commentsClass = 'comments-component'; this.requestRender(); });
        this.commentsElement.addEventListener('change', (e) => this.handleCommentsChange(e));

        // // if the attribute for comments gets set right away,
        // // the TextArea may not get hydrated as it has not been created.
        // // Check here if there are comments set on the attribute and update the TextArea.
        // const comments = this.getAttribute('comments');
        // if (comments) {
        //     this.commentsElement.value = comments;
        // }

        const clickables: NodeListOf<Element> = this.shadowRoot.querySelectorAll('[on-click]');

        // NodeListOf<T> currently does not have an iterator and forEach cannot be called on it.
        // tslint:disable-next-line:prefer-for-of
        for (let i: number = 0; i < clickables.length; i++) {
            const value: Element = clickables[i];
            // tslint:disable-next-line:no-eval
            value.addEventListener('click', eval(value.getAttribute('on-click')));
        }
    }

    public connectedCallback(): void {
        this.ready();
        // this.requestRender();
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        // Check if the comments element is available.
        // When the commets attribute is set straight on the markup, this can be called before the
        // corresponding TextArea is available.
        if (name === 'comments' && this.commentsElement && this.commentsElement.value !== newValue) {
            this.commentsElement.value = newValue;
        } else {
            this.props[name] = newValue;
        }

        this.requestRender();
    }

    private requestRender(): void {
        render(this._render(this.props), this.shadowRoot);
    }

    private handleCellClick(e: MouseEvent, cellName: string): boolean {
        const event: CustomEvent = new CustomEvent('interactive-cell-clicked', { detail: { name: cellName } });
        this.dispatchEvent(event);

        return true;
    }

    private handleCommentsChange(e: Event): boolean {
        const event: CustomEvent =
            new CustomEvent('comments-change', { detail: { comments: this.commentsElement.value } });
        this.dispatchEvent(event);

        return true;
    }

    private handleDapChange(e: Event): boolean {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const event: CustomEvent = new CustomEvent('dap-change', { detail: { dap: target.value } });
        this.dispatchEvent(event);

        return true;
    }

    private handleVacChange(e: Event): boolean {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const event: CustomEvent = new CustomEvent('vac-change', { detail: { vac: target.value } });
        this.dispatchEvent(event);

        return true;
    }
}

customElements.define(RhiIsncsciUiMobileTotals.is, RhiIsncsciUiMobileTotals);
