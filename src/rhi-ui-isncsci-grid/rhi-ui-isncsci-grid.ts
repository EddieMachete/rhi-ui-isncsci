/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import { RhiUiIsncsciGridCell } from './rhi-ui-isncsci-grid-cell';

export class RhiUiIsncsciGrid extends GestureEventListeners(LitElement) {
    public static get is(): string { return 'rhi-ui-isncsci-grid'; }

    public _render(props: any): TemplateResult {
        return html`
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
            <slot></slot>
        `;
    }

    // Polymer
    public static get properties(): object {
        return {
            previewSelectedValueOnRange: Boolean
        };
    }

    //private isncsciExam: IsncsciExam = null;
    private selectedCell: HTMLElement;
    
    // I don't like using any, but that is what
    private currentTrackSource: any = null;
    private selectionRange: HTMLElement[] = [];

    private cells: HTMLElement[];

    public constructor() {
        super();
    }

    // Polymer
    public ready(): void {
        super.ready();

        // if the element has children, it means rows were added to the <slot> element.
        // Other wise we asume the object was extended and the rows were added directly to the element's template instead of <slot>.
        const rootElement: HTMLElement = this.getRootElement();
        this.initializeCells(rootElement.children);

        Gestures.addListener(this, 'track', this.trackHandler.bind(this));
        Gestures.addListener(rootElement, 'down', this.downHandler.bind(this));
        Gestures.addListener(rootElement, 'up', this.upHandler.bind(this));
    }

    // Polymer
    public disconnectedCallback(): void {
        super.disconnectedCallback();

        const rootElement: HTMLElement = this.getRootElement();
        Gestures.removeListener(this, 'track', this.trackHandler.bind(this));
        Gestures.removeListener(rootElement, 'down', this.downHandler.bind(this));
        Gestures.removeListener(rootElement, 'up', this.upHandler.bind(this));
    }

    private getRootElement(): HTMLElement {
        return this['children'].length > 0 ? this : this['shadowRoot'];
    }

    private initializeCells(rows: HTMLCollection): void {
        this.cells = [];

        for (let r: number = 0; r < rows.length; r++) {
            const row: HTMLElement = <HTMLElement>rows.item(r);

            row.children

            if (!row.classList || !row.classList.contains('row')) {
                continue;
            }
            
            for (let c: number = 0; c < row.children.length; c++) {
                if (row.children[c].tagName.toUpperCase() === 'RHI-UI-ISNCSCI-GRID-CELL')
                    this.cells.push(<HTMLElement>row.children.item(c));
            }
        }
    }

    public selectCell(name: string) {
        if (this.selectedCell) {
            this.selectedCell['selected'] = false;
            this.selectedCell = null;
        }

        this.selectedCell = this.cells.find((c: HTMLElement) => c.getAttribute('name') === name);
        
        if (this.selectedCell) {
            this.selectedCell['selected'] = true;
        }
    }

    public getCellValue(name: string): string {
        const cell: HTMLElement = this.cells.find((c: HTMLElement) => c.getAttribute('name') === name);
        return cell ? cell.getAttribute('value') : '';
    }

    public clearSelectionRange(): void {
        this.cells.forEach((c: HTMLElement) => {
            c.removeAttribute('highlighted');
            c.removeAttribute('preview');
        });

        this.selectionRange = [];
    }

    private static rectanglesIntersect(r1Top: number, r1Right: number, r1Bottom: number, r1Left: number, r2Top: number, r2Right: number, r2Bottom: number, r2Left: number): boolean {
        return !(r2Left > r1Right || 
                 r2Right < r1Left || 
                 r2Top > r1Bottom ||
                 r2Bottom < r1Top);
    }

    private isValidForRange(cell: HTMLElement): boolean {
        return true;
    }

    private updateRange(top: number, right: number, bottom: number, left: number): void {
        const range: HTMLElement[] = [];
        const currentValue: string = this.selectedCell ? this.selectedCell.getAttribute('value') : null;

        this.cells.forEach((c: HTMLElement) => {
            if (
                RhiUiIsncsciGrid.rectanglesIntersect(c.offsetTop, c.offsetLeft + c.offsetWidth, c.offsetTop + c.offsetHeight, c.offsetLeft, top, right, bottom, left)
                && this.isValidForRange(c)
            ) {
                c.setAttribute('highlighted', 'true');
                range.push(c);

                if (this['previewSelectedValueOnRange'] && currentValue) {
                    c.setAttribute('preview', currentValue);
                }
            } else {
                c.removeAttribute('highlighted');
                c.removeAttribute('preview');
            }
        });

        this.selectionRange = range;
    }

    private trackHandler(e): void {
        const t: any = e.detail.hover();
        
        // We can get a null target when moving outside the document, possible when in a frame.
        if (!t) {
            return;
        }

        // Don't check when rolling over the same element, just when we move on top of a different cell
        if (this.currentTrackSource
            && this.currentTrackSource.offsetLeft === t.offsetLeft
            && this.currentTrackSource.offsetTop === t.offsetTop) {
            return;
        }

        this.currentTrackSource = t;

        let left: number;
        let right: number;
        let top: number;
        let bottom: number;

        if (e.detail.dx > 0) {
            left = e.detail.x - e.detail.dx;
            right = e.detail.x;
        } else {
            left = e.detail.x;
            right = e.detail.x - e.detail.dx;
        }

        if (e.detail.dy > 0) {
            top = e.detail.y - e.detail.dy;
            bottom = e.detail.y;
        } else {
            top = e.detail.y;
            bottom = e.detail.y - e.detail.dy;
        }

        this.updateRange(top, right, bottom, left);
    }

    private getCellFromElementPath(element: any): HTMLElement {
        let currentElement = element;
        let cell: HTMLElement = null;

        while (currentElement && !cell) {
            if (currentElement.tagName && currentElement.tagName.toLowerCase() === RhiUiIsncsciGridCell.is) {
                cell = currentElement;
            }

            currentElement = currentElement.parentNode;
        }

        return cell;
    }

    private downHandler(e: any): void {
        const cell: HTMLElement = this.getCellFromElementPath(e.target);

        if (!cell) {
            return;
        }

        const event: CustomEvent = new CustomEvent('cell-down', {detail: {name: cell.getAttribute('name')}});
        this['dispatchEvent'](event);
    }

    private upHandler(e): void {
        const cell: HTMLElement = this.getCellFromElementPath(e.target);

        if (!cell) {
            return;
        }

        const event: CustomEvent = new CustomEvent('cell-up', {detail: {name: cell.getAttribute('name')}});
        this['dispatchEvent'](event);
    }
}

customElements.define(RhiUiIsncsciGrid.is, RhiUiIsncsciGrid);