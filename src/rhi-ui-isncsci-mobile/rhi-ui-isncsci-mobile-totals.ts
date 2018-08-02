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
        `;
    }

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
    }

    public stateChanged(state: any): void {
    }
}

customElements.define(RhiUiIsncsciMobileTotals.is, RhiUiIsncsciMobileTotals);