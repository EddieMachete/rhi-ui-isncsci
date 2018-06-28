/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, PolymerElement } from '@polymer/polymer';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
//import { IsncsciExam } from 'rhi-core-isncsci-algorithm';

export class RhiUiIsncsciGrid extends GestureEventListeners(PolymerElement) {
    public static get is(): string { return 'rhi-ui-isncsci-grid'; }

    public static get template(): html {
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
        return {};
    }

    //private isncsciExam: IsncsciExam = null;
    private currentCell: HTMLElement;
    
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

        this.initializeCells(this['children']);

        Gestures.addListener(this, 'track', this.trackHandler.bind(this));

        // this['addEventListener']('click', (e) => {
        //     this.currentCell = e.target;
        //     this.selectNextCell();
        // });
    }

    // Polymer
    public disconnectedCallback(): void {
        super.disconnectedCallback();
        Gestures.removeListener(this, 'track', this.trackHandler.bind(this));
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

    public selectNextCell(): void {
        if (!this.currentCell) {
            return;
        }


        //console.log(`${this.currentCell.offsetLeft}, ${this.currentCell.offsetTop}`);
        //console.log(this.currentCell.nextElementSibling);
        //console.log(this.currentCell.parentNode);
    }

    public selectCellWith(dermatome) {
        // if (this.SelectedCell)
        //     this.SelectedCell.View.removeClass('selected');
    
        // this.SelectedCell = !dermatome ? null : this.SmartCells[dermatome.Level.Name + dermatome.Side + dermatome.MeasurementType];
        
        // if (this.SelectedCell)
        //     this.SelectedCell.View.addClass('selected');
    }

    /*public bindTo(isncsciExam: IsncsciExam): RhiUiIsncsciGrid {
        if (this.isncsciExam) {
            return this;
        }
        
        return this;
    }*/

    private static rectanglesIntersect(r1Top: number, r1Right: number, r1Bottom: number, r1Left: number, r2Top: number, r2Right: number, r2Bottom: number, r2Left: number): boolean {
        return !(r2Left > r1Right || 
                 r2Right < r1Left || 
                 r2Top > r1Bottom ||
                 r2Bottom < r1Top);
      }

    private updateRange(top: number, right: number, bottom: number, left: number): void {
        const range: HTMLElement[] = [];

        this.cells.forEach((c) => {
            if (RhiUiIsncsciGrid.rectanglesIntersect(c.offsetTop, c.offsetLeft + c.offsetWidth, c.offsetTop + c.offsetHeight, c.offsetLeft, top, right, bottom, left)) {
                c.setAttribute('highlighted', 'true');
                range.push(c);
            } else {
                c.removeAttribute('highlighted');
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
}

customElements.define(RhiUiIsncsciGrid.is, RhiUiIsncsciGrid);