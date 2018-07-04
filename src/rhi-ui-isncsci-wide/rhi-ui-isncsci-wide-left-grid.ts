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
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C5</div>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C6</div>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C7</div>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
            </div>
            <div class="row">
                <div>Elbow flexors C8</div>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
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
        console.log(state);
        this.c2RightTouch = state.neurologyForm.c2RightTouch;
    }
}

customElements.define(RhiUiIsncsciWideLeftGrid.is, RhiUiIsncsciWideLeftGrid);