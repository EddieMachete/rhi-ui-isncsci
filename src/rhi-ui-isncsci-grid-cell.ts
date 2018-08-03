/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

export class RhiUiIsncsciGridCell extends LitElement {    
//export class RhiUiIsncsciGridCell extends PolymerElement {
    public static get is(): string { return 'rhi-ui-isncsci-grid-cell'; }
    public static get observedAttributes(): string[] {
        return ['value', 'preview'];
    }

    public _render(props: any): TemplateResult {
        return html`
            <style>
                :host {
                    display: block;
                }

                :host([selected]) .cell {
                    border-color: var(--grid-selected-border-color, #666);
                }

                :host([special]) .cell {
                    background-color: var(--grid-special-background-color, #FFF);
                }

                :host([highlighted]) .cell,
                :host([special][highlighted]) .cell {
                    color: var(--grid-highlight-color, #FFF);
                    background-color: var(--grid-highlight-background-color, #CCC);
                }

                .cell {
                    background-color: var(--grid-background-color, #E2E2E2);
                    border:solid 1px #CCC;
                    color: var(--grid-color, #333);
                    font-size: 14px;
                    height: 29px;
                    line-height: 30px;
                    margin: 1px;
                    text-align: center;
                    width: 37px;
                }
            </style>
            <!-- shadow DOM for your element -->
            <div class="cell">${this.displayValue}</span>
        `;
    }

    private displayValue: string = '';

    public get selected(): boolean { return this.hasAttribute('selected'); }
    public set selected(value: boolean) {
        if (!value) {
            this.removeAttribute('selected');
        } else if (!this.selected) {
            this.setAttributeNode(document.createAttribute('selected'));
        }
    }

    public get value(): string { return this.getAttribute('value'); }
    public set value(v: string) {
        if (v !== this.value) {
            this.setAttribute('value', v);
        }
    }

    public get preview(): string { return this.getAttribute('preview'); }
    public set preview(v: string) { 
        if (v && v !== this.preview) {
            this.setAttribute('preview', v);
            return;
        }
        
        if (!v && this.hasAttribute('preview')) {
            this.removeAttribute('preview');
        }
    }

    public constructor() {
        super();
    }

    public attributeChangedCallback(name, oldValue, newValue): void {
        super.attributeChangedCallback(name, oldValue, newValue);


        if (oldValue === newValue || !/^(preview|value)$/.test(name)) {
            return;
        }
        
        this.updateDisplayValue();
        this.requestRender();
    }

    private updateDisplayValue(): void {
        this.displayValue = this.hasAttribute('preview') ? this.preview : this.value;
    }
}

customElements.define(RhiUiIsncsciGridCell.is, RhiUiIsncsciGridCell);