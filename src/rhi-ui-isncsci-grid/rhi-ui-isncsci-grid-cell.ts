/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { html, PolymerElement } from '@polymer/polymer';

export class RhiUiIsncsciGridCell extends PolymerElement {
    public static get is(): string { return 'rhi-ui-isncsci-grid-cell'; }

    public static get template(): html {
        return html`
            <style>
                :host {
                    display: block;

                    /*-webkit-box-shadow: 2px 2px rgba(226, 226, 226, 0.7);
                    -moz-box-shadow: 2px 2px rgba(226, 226, 226, 0.7);
                    box-shadow: 2px 2px rgba(226, 226, 226, 0.7);*/
                }

                :host([selected]) .cell {
                    border-color: red;
                }

                :host([highlighted]) .cell {
                    background-color: orange;
                }

                .cell {
                    background-color:#E2E2E2;
                    border:solid 1px #CCC;
                    height: 32px;
                    margin: 2px;
                    width: 40px;
                }

                /*.smart-cell.entered-by-user span {
                    background-color:#FFF;
                }

                .smart-cell a {
                    display:block;
                    height:25px;
                    line-height:23px;
                    text-align:center;
                    text-decoration:none;
                }*/

                /*.right-column .selected span,
                .left-column .selected span {
                border-color:Orange;
                }*/
            </style>
            <!-- shadow DOM for your element -->
            <div class="cell">{{value}}</span>
        `;
    }

    public static get properties(): object {
        return {
            selected: {
                reflectToAttribute: true,
                type: Boolean,
                value: false
            },
            value: {
                type: String,
                value: ''
            }
        };
    }

    public constructor() {
        super();
    }

    public ready(): void {
        super.ready();
    }
}

customElements.define(RhiUiIsncsciGridCell.is, RhiUiIsncsciGridCell);