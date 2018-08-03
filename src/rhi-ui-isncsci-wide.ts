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
import { SelectDermatomeUseCase, SetDermatomeValueUseCase, UpdateDermatomesInRangeUseCase } from 'rhi-core-isncsci-algorithm/usecases';
import { connect } from './helpers/connect-mixin';
import { store } from './store/store';
import { AppStoreProvider } from './providers';

export class RhiUiIsncsciWide extends connect(store)(LitElement) {
    public static get is(): string { return 'rhi-ui-isncsci-wide'; }

    private leftGrid: HTMLElement;
    private appStoreProvider: AppStoreProvider;
    private dermatomeSelected: string;
    private dermatomeSelectedValue: string = '';

    //public static get template(): html {
    public _render(props: any): TemplateResult {
        return html`
            <style>
                :host {
                    display: block;
                    --grid-highlight-color: #C60;
                    --grid-selected-border-color: #C60;
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
            <div class="cell-input">
                <button value="0" on-click="${e => this.handleCellInput(e)}">0</button>
                <button value="1" on-click="${e => this.handleCellInput(e)}">1</button>
                <button value="2" on-click="${e => this.handleCellInput(e)}">2</button>
                <button value="3" on-click="${e => this.handleCellInput(e)}">3</button>
                <button value="4" on-click="${e => this.handleCellInput(e)}">4</button>
                <button value="5" on-click="${e => this.handleCellInput(e)}">5</button>
            </div>
            <div class="display-flex">
                <rhi-ui-isncsci-wide-left-grid id="leftGrid"
                                               class="user-select-none"
                                               on-cell-down="${e => this.handleGridCellDown(e)}"
                                               on-cell-up="${e => this.handleGridCellUp(e)}"></rhi-ui-isncsci-wide-left-grid>
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

        this.appStoreProvider = new AppStoreProvider();
    }

    public ready(): void {
        super.ready();

        this.leftGrid = this.shadowRoot.getElementById('leftGrid');
    }

    // Polymer
    public disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    public stateChanged(state: any): void {
        this.dermatomeSelected = state.uiState.dermatomeSelected;
        this.dermatomeSelectedValue = this.dermatomeSelected ? state.neurologyForm[this.dermatomeSelected] : '';
    }

    private handleGridCellDown(e: CustomEvent): void {
        new SelectDermatomeUseCase(this.appStoreProvider).execute(e.detail.name);
    }

    private handleGridCellUp(e: CustomEvent): void {
        const selectionRange: string[] = this.leftGrid['selectionRange']
        ? this.leftGrid['selectionRange'].map((cell: HTMLElement) => cell.getAttribute('name')) : [];
        this.leftGrid['clearSelectionRange']();

        if (selectionRange.length === 0 || !this.dermatomeSelected) {
            return;
        }

        new UpdateDermatomesInRangeUseCase(this.appStoreProvider)
        .execute(selectionRange, this.dermatomeSelectedValue);
    }

    public handleCellInput(e): void {
        new SetDermatomeValueUseCase(this.appStoreProvider).execute(this.dermatomeSelected, e.target.value);
    }
}

customElements.define(RhiUiIsncsciWide.is, RhiUiIsncsciWide);