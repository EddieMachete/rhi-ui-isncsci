/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

export class RhiUiIsncsciMobileTotals extends LitElement {
    public static get is(): string { return 'rhi-ui-isncsci-mobile-totals'; }

    public _render(props: any): TemplateResult {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;
                }

                .secondary-text {
                    color: var(--isncsci-secondary-text-color, #666);
                }

                .secondary-text.small {
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
                    margin-left: 8px;
                    width: 48px;
                }

                /* The interactive cells can be tapped.  They need to express that affordance to the user.object */
                .cell.interactive {
                    background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
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
                    font-family: 'Roboto', 'Noto', sans-serif;
                    font-size: 14px;
                    height: 120px;
                    outline: none;
                    overflow: auto;
                    resize: none;
                    width: 100%;
                }
            </style>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>Right</div>
                    <div>Left</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Upper motor</span></div>
                    <div class="cell interactive">&nbsp;</div>
                    <div class="cell interactive">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Lower motor</span></div>
                    <div class="cell interactive">&nbsp;</div>
                    <div class="cell interactive">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Light touch</span></div>
                    <div class="cell interactive">&nbsp;</div>
                    <div class="cell interactive">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Pin prick</span></div>
                    <div class="cell interactive">&nbsp;</div>
                    <div class="cell interactive">&nbsp;</div>
                </div>
            </div>
            <div class="grid">
                <div class="row">
                    <div class="label">
                        <span class="text-align-right secondary-text">VAC</span>
                        <br/>
                        <span class="text-align-right secondary-text small">Voluntary anal contraction</span>
                    </div>
                </div>
                <div class="row">
                    <div class="label">
                        <div class="text-align-right secondary-text">VAC</div>
                        <div class="text-align-right secondary-text small">Voluntary anal contraction</div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>Right</div>
                    <div>Left</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Sensory NL</span></div>
                    <div class="cell interactive">&nbsp;</div>
                    <div class="cell interactive">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Motor NL</span></div>
                    <div class="cell interactive">&nbsp;</div>
                    <div class="cell interactive">&nbsp;</div>
                </div>
            </div>
            <div class="grid">
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">NLI</span></div>
                    <div class="cell">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Complete or incomplete</span></div>
                    <div class="cell">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">AIS</span></div>
                    <div class="cell">&nbsp;</div>
                </div>
            </div>
            <div class="grid">
                <div class="row header secondary-text">
                    <div>Right</div>
                    <div>Left</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Sensory NL ZPP</span></div>
                    <div class="cell">&nbsp;</div>
                    <div class="cell">&nbsp;</div>
                </div>
                <div class="row">
                    <div class="label"><span class="text-align-right secondary-text">Motor NL ZPP</span></div>
                    <div class="cell">&nbsp;</div>
                    <div class="cell">&nbsp;</div>
                </div>
            </div>
            <div class$="${this.commentsClass}">
                <div class="label secondary-text">General comments:</div>
                <textarea id="comments" rows="1"></textarea>
            </div>
        `;
    }

    private comments: HTMLTextAreaElement;
    private commentsClass: string = 'comments-component';

    public static get properties(): object {
        return {
            c2RightTouch: { type: String, value: '' },
            c2RightPrick: { type: String, value: '' }
        };
    }

    public constructor() {
        super();
    }

    public ready(): void {
        super.ready();

        this.comments = this['shadowRoot'].getElementById('comments');
        this.comments.addEventListener('focus', (e) => { this.commentsClass = 'comments-component active';this.requestRender(); });
        this.comments.addEventListener('blur', (e) => { this.commentsClass = 'comments-component';this.requestRender(); });

        if (this.comments['textLength'] > 0) {
            this.commentsClass = 'comments-component active';
        }
    }

    public stateChanged(state: any): void {
    }
}

customElements.define(RhiUiIsncsciMobileTotals.is, RhiUiIsncsciMobileTotals);