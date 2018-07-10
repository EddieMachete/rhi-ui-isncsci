/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { RhiUiIsncsciGrid } from '../rhi-ui-isncsci-grid/rhi-ui-isncsci-grid';
import { connect } from '../helpers/connect-mixin';
import { store } from '../store/store';

export class RhiUiIsncsciWideLeftGrid extends connect(store)(RhiUiIsncsciGrid) {
    public static get is(): string { return 'rhi-ui-isncsci-wide-left-grid'; }

    //public static get template(): html {
    public _render(props: any): TemplateResult {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;

                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                }

                .row {
                    display: flex;
                    width: 100%;
                }

                rhi-ui-isncsci-grid-cell,
                .empty-cell {
                    margin: 1px;
                    flex: 1 0;
                }
            </style>
            <div class="row">
                <div>C2</div>
                <rhi-ui-isncsci-grid-cell value="${props.c2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>C3</div>
                <rhi-ui-isncsci-grid-cell value="${props.c3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>C4</div>
                <rhi-ui-isncsci-grid-cell value="${props.c4RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c4RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C5</div>
                <rhi-ui-isncsci-grid-cell value="${props.c5RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C6</div>
                <rhi-ui-isncsci-grid-cell value="${props.c6RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c6RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c6RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C7</div>
                <rhi-ui-isncsci-grid-cell value="${props.c7RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c7RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c7RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C8</div>
                <rhi-ui-isncsci-grid-cell value="${props.c8RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c8RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.c8RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T1</div>
                <rhi-ui-isncsci-grid-cell value="${props.t1RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t1RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t1RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T2</div>
                <rhi-ui-isncsci-grid-cell value="${props.t2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T3</div>
                <rhi-ui-isncsci-grid-cell value="${props.t3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T4</div>
                <rhi-ui-isncsci-grid-cell value="${props.t4RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t4RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T5</div>
                <rhi-ui-isncsci-grid-cell value="${props.t5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T6</div>
                <rhi-ui-isncsci-grid-cell value="${props.t6RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t6RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T7</div>
                <rhi-ui-isncsci-grid-cell value="${props.t7RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t7RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T8</div>
                <rhi-ui-isncsci-grid-cell value="${props.t8RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t8RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T9</div>
                <rhi-ui-isncsci-grid-cell value="${props.t9RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t9RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T10</div>
                <rhi-ui-isncsci-grid-cell value="${props.t10RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t10RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T11</div>
                <rhi-ui-isncsci-grid-cell value="${props.t11RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t11RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors T12</div>
                <rhi-ui-isncsci-grid-cell value="${props.t12RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.t12RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors L1</div>
                <rhi-ui-isncsci-grid-cell value="${props.l1RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l1RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors L2</div>
                <rhi-ui-isncsci-grid-cell value="${props.l2RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors L3</div>
                <rhi-ui-isncsci-grid-cell value="${props.l3RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors L4</div>
                <rhi-ui-isncsci-grid-cell value="${props.l4RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l4RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l4RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors L5</div>
                <rhi-ui-isncsci-grid-cell value="${props.l5RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.l5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors S1</div>
                <rhi-ui-isncsci-grid-cell value="${props.s1RightMotor}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.s1RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.s1RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors S2</div>
                <rhi-ui-isncsci-grid-cell value="${props.s2RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.s2RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors S3</div>
                <rhi-ui-isncsci-grid-cell value="${props.s3RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.s3RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors S4_5</div>
                <rhi-ui-isncsci-grid-cell value="${props.s4_5RightTouch}"></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell value="${props.s4_5RightPrick}"></rhi-ui-isncsci-grid-cell>
            </div>
        `;
    }

    public static get properties(): object {
        return {
            c2RightTouch: { type: String, value: '' },
            c2RightPrick: { type: String, value: '' },
            c3RightTouch: { type: String, value: '' },
            c3RightPrick: { type: String, value: '' },
            c4RightTouch: { type: String, value: '' },
            c4RightPrick: { type: String, value: '' },
            c5RightTouch: { type: String, value: '' },
            c5RightPrick: { type: String, value: '' },
            c5RightMotor: { type: String, value: '' },
            c6RightTouch: { type: String, value: '' },
            c6RightPrick: { type: String, value: '' },
            c6RightMotor: { type: String, value: '' },
            c7RightTouch: { type: String, value: '' },
            c7RightPrick: { type: String, value: '' },
            c7RightMotor: { type: String, value: '' },
            c8RightTouch: { type: String, value: '' },
            c8RightPrick: { type: String, value: '' },
            c8RightMotor: { type: String, value: '' },
            t1RightTouch: { type: String, value: '' },
            t1RightPrick: { type: String, value: '' },
            t1RightMotor: { type: String, value: '' },
            t2RightTouch: { type: String, value: '' },
            t2RightPrick: { type: String, value: '' },
            t3RightTouch: { type: String, value: '' },
            t3RightPrick: { type: String, value: '' },
            t4RightTouch: { type: String, value: '' },
            t4RightPrick: { type: String, value: '' },
            t5RightTouch: { type: String, value: '' },
            t5RightPrick: { type: String, value: '' },
            t6RightTouch: { type: String, value: '' },
            t6RightPrick: { type: String, value: '' },
            t7RightTouch: { type: String, value: '' },
            t7RightPrick: { type: String, value: '' },
            t8RightTouch: { type: String, value: '' },
            t8RightPrick: { type: String, value: '' },
            t9RightTouch: { type: String, value: '' },
            t9RightPrick: { type: String, value: '' },
            t10RightTouch: { type: String, value: '' },
            t10RightPrick: { type: String, value: '' },
            t11RightTouch: { type: String, value: '' },
            t11RightPrick: { type: String, value: '' },
            t12RightTouch: { type: String, value: '' },
            t12RightPrick: { type: String, value: '' },
            l1RightTouch: { type: String, value: '' },
            l1RightPrick: { type: String, value: '' },
            l2RightTouch: { type: String, value: '' },
            l2RightPrick: { type: String, value: '' },
            l2RightMotor: { type: String, value: '' },
            l3RightTouch: { type: String, value: '' },
            l3RightPrick: { type: String, value: '' },
            l3RightMotor: { type: String, value: '' },
            l4RightTouch: { type: String, value: '' },
            l4RightPrick: { type: String, value: '' },
            l4RightMotor: { type: String, value: '' },
            l5RightTouch: { type: String, value: '' },
            l5RightPrick: { type: String, value: '' },
            l5RightMotor: { type: String, value: '' },
            s1RightTouch: { type: String, value: '' },
            s1RightPrick: { type: String, value: '' },
            s1RightMotor: { type: String, value: '' },
            s2RightTouch: { type: String, value: '' },
            s2RightPrick: { type: String, value: '' },
            s3RightTouch: { type: String, value: '' },
            s3RightPrick: { type: String, value: '' },
            s4_5RightTouch: { type: String, value: '' },
            s4_5RightPrick: { type: String, value: '' }
        };
    }

    public constructor() {
        super();
    }

    public ready(): void {
        super.ready();
    }

    public stateChanged(state: any): void {
        this.c2RightTouch = state.neurologyForm.c2RightTouch;
    }
}

customElements.define(RhiUiIsncsciWideLeftGrid.is, RhiUiIsncsciWideLeftGrid);