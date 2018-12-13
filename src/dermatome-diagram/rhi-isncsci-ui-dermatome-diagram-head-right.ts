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

export class RhiIsncsciUiDermatomeDiagramHeadRight extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-dermatome-diagram-head-right'; }

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.requestRender();
    }

    public getTemplate(): string {
        return `
            <style>
                :host {
                    display: block;
                }

                :host([c2-right="0"]) .c2 .right,
                :host([c3-right="0"]) .c3 .right,
                :host([c4-right="0"]) .c4 .right {
                    fill: var(--isncsci-diagram-severity-4-color, #000);
                }

                :host([c2-right="0!"]) .c2 .right,
                :host([c3-right="0!"]) .c3 .right,
                :host([c4-right="0!"]) .c4 .right {
                    fill: var(--isncsci-diagram-severity-3-color, #333);
                }

                :host([c2-right="1"]) .c2 .right,
                :host([c3-right="1"]) .c3 .right,
                :host([c4-right="1"]) .c4 .right {
                    fill: var(--isncsci-diagram-severity-2-color, #666);
                }

                :host([c2-right="1!"]) .c2 .right,
                :host([c3-right="1!"]) .c3 .right,
                :host([c4-right="1!"]) .c4 .right {
                    fill: var(--isncsci-diagram-severity-1-color, #999);
                }

                :host([c2-right="2"]) .c2 .right,
                :host([c3-right="2"]) .c3 .right,
                :host([c4-right="2"]) .c4 .right {
                    fill: var(--isncsci-diagram-severity-0-color, #FFF);
                }

                :host([hide-annotations]) .annotations {
                    opacity: 0;
                    visibility: hidden;
                }

                .annotations {
                    transition: opacity 600ms, visibility 600ms;
                }

                .annotations .t {
                    font-family: var(--isncsci-diagram-annotation-font-family, ArialMT, Arial);
                    font-size: var(--isncsci-diagram-annotation-font-size, 8.28px);
                }

                .annotations .t,
                .annotations circle,
                .annotations path {
                    fill: var(--isncsci-diagram-annotation-color, #666);
                }

                .annotations .l {
                    fill:none;
                    stroke: var(--isncsci-diagram-annotation-color, #666);
                    stroke-linecap:round;
                    stroke-linejoin:round;
                    stroke-miterlimit:10;
                    stroke-width: 1.4px;
                }

                /* 0 0! 1 1! 2*/
                path,
                ellipse {
                    fill: var(--isncsci-diagram-default-color, #CCC);
                    /*stroke: #000;*/
                    /*stroke-width: .5px;*/
                    transition: fill 300ms;
                }
            </style>
            <!-- shadow DOM for your element -->
            <svg class="dermatome-diagram-head-right"
                 data-name="dermatome-diagram-head-right"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 127 182">
                <title>rhi-isncsci-ui-dermatome-diagram-head-right</title>
                <g class="c2">
                    <path class="right" d="M32.88,94c1.19,1.39,2.06,4.23,2.55,7.68C42.36,106.38,54.51,115,57,117c10,8,18,9.78,30.94,9.78a1.55,1.55,0,0,0,.09-.4c0-1.29.1-5.17.1-7.15l.88.21L88,119l-12-5S56,55,54,47c-1.07-4.29-6.3-19.94-7.67-38.36C25.41,17.52,15,37.94,15,59.11,15,87.32,28.9,89.32,32.88,94Z"/>
                </g>
                <g class="c3">
                    <path class="right" d="M83.07,139.59c0-5,4.21-10.9,4.87-12.81C75,126.78,67,125,57,117c-2.49-2-14.64-10.62-21.57-15.36,1.16,8.15.24,19.77-3.54,24.19l-.91,1c5.49,4.78,16.67,14.4,24.22,19.19,8.64,5.49,28.3,15.33,39.38,20C90.19,156.5,83.07,146.32,83.07,139.59Z"/>
                </g>
                <g class="c4">
                    <path class="right" d="M55.2,146c-7.55-4.79-18.73-14.41-24.22-19.19C21.39,137.41,4,147.65,4,178H98c0-3.6-1.42-7.7-3.37-11.94C83.5,161.37,63.84,151.53,55.2,146Z"/>
                </g>
                <g class="extras">
                    <path class="right" d="M112.55,61.76c0-5.31,3.66-12.61,3.66-16.6s-2.33-10.62-5.65-17.59c5-6,0-9.63-3-11.62S85.1,4,70.73,4a62,62,0,0,0-24.4,4.64C47.7,27.06,52.93,42.71,54,47c2,8,22,67,22,67l12,5,1,.44A123.1,123.1,0,0,0,101.27,122c10.86,1.47,12-4.93,12.09-6.81a61.63,61.63,0,0,0-.69-10.53c3.87-.9,3-3.48,2-5.27,3-3.27,2.22-4.07,1.22-8.39,1.33-1.66,3-.66,5-2.65s1.33-5.31,0-7.64S112.55,67.07,112.55,61.76Z"/>
                </g>
                <g class="annotations">
                    <text class="t" transform="translate(39.94 52.03)">C2</text>
                    <circle cx="35.89" cy="84.85" r="2.55"/>
                    <text class="t" transform="translate(49.94 131.03)">C3</text>
                    <circle cx="71.89" cy="138.85" r="2.55"/>
                    <text class="t" transform="translate(26.94 173.03)">C4</text>
                    <circle cx="42.89" cy="154.85" r="2.55"/>
                    <path class="l" d="M87.24,118.33c-4.55-1.67-13.94-5.54-16.37-6.76S59.79,107,59.79,90c-.76,1.22-1.68,2-3.8-.3S49.61,77.25,49.61,71,52.2,55.69,60.7,61.16"/>
                </g>
            </svg>
        `;
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = this.getTemplate();

        if (this.shadowRoot) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
}

customElements.define(RhiIsncsciUiDermatomeDiagramHeadRight.is, RhiIsncsciUiDermatomeDiagramHeadRight);
