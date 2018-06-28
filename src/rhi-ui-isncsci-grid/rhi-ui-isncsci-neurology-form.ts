/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, PolymerElement } from '@polymer/polymer';
import { IsncsciExam } from 'rhi-core-isncsci-algorithm/src/isncsciExam';
import { NeuroLevel } from 'rhi-core-isncsci-algorithm/src/neuroLevel';

export class RhiUiIsncsciNeurologyForm extends PolymerElement {
    public static get is(): string { return 'rhi-ui-isncsci-neurology-form'; }

    public static get template(): html {
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
                    <rhi-ui-isncsci-grid-cell value="{{c2.rightTouch}}"></rhi-ui-isncsci-grid-cell>
                    <rhi-ui-isncsci-grid-cell></rhi-ui-isncsci-grid-cell>
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
        return {};
    }

    private isncsciExam: IsncsciExam;
    private c2: NeuroLevel;

    public constructor() {
        super();

        this.isncsciExam = new IsncsciExam();
        this.c2 = this.isncsciExam.getLevelWithName('C2');
        this.c2.rightTouch = 'NT';

        let count = 0;
        //setInterval(() => {this.c2.rightTouch = (++count).toString();console.log(this.c2.rightTouch);}, 1000);
        //setTimeout(() => {this.c2.rightTouch = 'a'; console.log(this.c2.rightTouch); }, 1000);
    }

    public ready(): void {
        super.ready();
    }
}

customElements.define(RhiUiIsncsciNeurologyForm.is, RhiUiIsncsciNeurologyForm);