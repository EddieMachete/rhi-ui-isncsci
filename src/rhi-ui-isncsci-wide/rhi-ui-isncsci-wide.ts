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
import { RhiUiIsncsciGridCell } from '../rhi-ui-isncsci-grid/rhi-ui-isncsci-grid-cell';

export class RhiUiIsncsciWide extends connect(store)(LitElement) {
    public static get is(): string { return 'rhi-ui-isncsci-wide'; }

    private leftGrid: HTMLElement;

    //public static get template(): html {
    public _render(props: any): TemplateResult {
        return html`
            <style>
                :host {
                    display: block;
                }
                
                .display-flex {
                    display: flex;
                }

                .diagram {
                    background-color: #FDD;
                    color: #666;
                    padding: 8px;
                }

                .grid {
                    background-color: #DDF;
                    color: #666;
                    padding: 8px;
                }

                .totals {
                    background-color: #DDD;
                    padding: 24px;
                    text-align: center;
                }
            </style>
            <!-- shadow DOM for your element -->
            <div class="display-flex">
                <rhi-ui-isncsci-wide-left-grid id="leftGrid" class="user-select-none" on-celldown="onCellDown"></rhi-ui-isncsci-wide-left-grid>
                <div class="diagram">ASIA Man Diagram</div>
                <div class="grid right">Right Grid</div>
            </div>
            <div class="totals">Totals</div>
        `;
    }

    public static get properties(): object {
        return {};
    }

    public constructor() {
        super();
    }

    public ready(): void {
        super.ready();

        this.leftGrid = this.shadowRoot.getElementById('leftGrid');
        console.log(this.leftGrid);

        this.leftGrid.addEventListener('cell-down', this.gridCellDown);
        this.leftGrid.addEventListener('cell-up', this.gridCellUp);
    }

    // Polymer
    public disconnectedCallback(): void {
        super.disconnectedCallback();

        this.leftGrid.removeEventListener('cell-down', this.gridCellDown);
        this.leftGrid.removeEventListener('cell-up', this.gridCellUp);
    }

    public stateChanged(state: any): void {
        //console.log(state);
    }

    private static getCellFromEventPath(path: any[]): HTMLElement {
        return path.find((e: any) => e.tagName && e.tagName.toLowerCase() === RhiUiIsncsciGridCell.is);
    }

    private gridCellDown(e: CustomEvent): void {
        console.log('cell down');
    }

    private gridCellUp(e: CustomEvent): void {
        console.log('cell up');
    }
}

customElements.define(RhiUiIsncsciWide.is, RhiUiIsncsciWide);