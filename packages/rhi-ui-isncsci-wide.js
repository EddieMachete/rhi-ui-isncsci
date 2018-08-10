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
import { html, LitElement } from '@polymer/lit-element/lit-element.js';
import { SelectDermatomeUseCase, SetDermatomeValueUseCase, UpdateDermatomesInRangeUseCase } from 'rhi-core-isncsci-algorithm/usecases';
import { connect } from './helpers/connect-mixin';
import { store } from './store/store';
import { AppStoreProvider } from './providers';
export class RhiUiIsncsciWide extends connect(store)(LitElement) {
    constructor() {
        super();
        this.dermatomeSelectedValue = '';
        this.appStoreProvider = new AppStoreProvider();
    }
    static get is() { return 'rhi-ui-isncsci-wide'; }
    //public static get template(): html {
    _render(props) {
        return html `
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
    static get properties() {
        return {};
    }
    ready() {
        super.ready();
        this.leftGrid = this.shadowRoot.getElementById('leftGrid');
    }
    // Polymer
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    stateChanged(state) {
        this.dermatomeSelected = state.uiState.dermatomeSelected;
        this.dermatomeSelectedValue = this.dermatomeSelected ? state.neurologyForm[this.dermatomeSelected] : '';
    }
    handleGridCellDown(e) {
        new SelectDermatomeUseCase(this.appStoreProvider).execute(e.detail.name);
    }
    handleGridCellUp(e) {
        const selectionRange = this.leftGrid['selectionRange']
            ? this.leftGrid['selectionRange'].map((cell) => cell.getAttribute('name')) : [];
        this.leftGrid['clearSelectionRange']();
        if (selectionRange.length === 0 || !this.dermatomeSelected) {
            return;
        }
        new UpdateDermatomesInRangeUseCase(this.appStoreProvider)
            .execute(selectionRange, this.dermatomeSelectedValue);
    }
    handleCellInput(e) {
        new SetDermatomeValueUseCase(this.appStoreProvider).execute(this.dermatomeSelected, e.target.value);
    }
}
customElements.define(RhiUiIsncsciWide.is, RhiUiIsncsciWide);
