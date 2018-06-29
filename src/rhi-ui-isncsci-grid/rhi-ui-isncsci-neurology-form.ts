/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

//import { html, PolymerElement } from '@polymer/polymer';
import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { connect } from '../helpers/connect-mixin';
import { store } from '../store/store';

export class RhiUiIsncsciNeurologyForm extends connect(store)(LitElement) {
    public static get is(): string { return 'rhi-ui-isncsci-neurology-form'; }

    //public static get template(): html {
    public _render(props: any): TemplateResult {
        return html`
            <style>
                :host {
                    display: block;
                }

                .row {
                    display: flex;
                }
            </style>
            <!-- shadow DOM for your element -->
            <rhi-ui-isncsci-grid class="user-select-none">
                <div class="row">
                    <div>C2</div>
                    <rhi-ui-isncsci-grid-cell value="${props.c2RightTouch}"></rhi-ui-isncsci-grid-cell>
                    <rhi-ui-isncsci-grid-cell value="${props.c2RightPrick}"></rhi-ui-isncsci-grid-cell>
                </div>
                <div class="row">
                    <div>C3</div>
                    <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
                    <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
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
            </rhi-ui-isncsci-grid>
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

customElements.define(RhiUiIsncsciNeurologyForm.is, RhiUiIsncsciNeurologyForm);