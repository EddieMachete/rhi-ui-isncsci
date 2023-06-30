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

export class RhiIsncsciUiDermatomeDiagramHeadLeft extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-dermatome-diagram-head-left'; }

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.requestRender();
    }

    public getTemplate(): string {
        // tslint:disable:max-line-length
        return `
            <style>
                :host {
                    display: block;
                }

                :host([c2-left="0"]) .c2 .left,
                :host([c3-left="0"]) .c3 .left,
                :host([c4-left="0"]) .c4 .left {
                    fill: var(--isncsci-diagram-severity-4-color, #000);
                }

                :host([c2-left="0!"]) .c2 .left,
                :host([c3-left="0!"]) .c3 .left,
                :host([c4-left="0!"]) .c4 .left {
                    fill: var(--isncsci-diagram-severity-3-color, #333);
                }

                :host([c2-left="1"]) .c2 .left,
                :host([c3-left="1"]) .c3 .left,
                :host([c4-left="1"]) .c4 .left {
                    fill: var(--isncsci-diagram-severity-2-color, #666);
                }

                :host([c2-left="1!"]) .c2 .left,
                :host([c3-left="1!"]) .c3 .left,
                :host([c4-left="1!"]) .c4 .left {
                    fill: var(--isncsci-diagram-severity-1-color, #999);
                }

                :host([c2-left="2"]) .c2 .left,
                :host([c3-left="2"]) .c3 .left,
                :host([c4-left="2"]) .c4 .left {
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
            <svg class="dermatome-diagram-head-left"
                 data-name="dermatome-diagram-head-left"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 127 182">
                <title>rhi-isncsci-ui-dermatome-diagram-head-left</title>
                <g class="c2">
                    <path class="left" d="M93.23,94c-1.19,1.39-2.06,4.23-2.55,7.68C83.75,106.38,71.6,115,69.11,117c-10,8-18,9.78-30.94,9.78a1.22,1.22,0,0,1-.09-.4c0-1.29-.1-5.17-.1-7.15l-.89.21,1-.44,12-5s20-59,22-67c1.07-4.29,6.3-19.94,7.67-38.36,20.91,8.88,31.37,29.3,31.37,50.47C111.15,87.32,97.21,89.32,93.23,94Z"/>
                </g>
                <g class="c3">
                    <path class="left" d="M43,139.59c0-5-4.21-10.9-4.87-12.81,12.94,0,20.94-1.78,30.94-9.78,2.49-2,14.64-10.62,21.57-15.36-1.16,8.15-.24,19.77,3.54,24.19l.91,1c-5.49,4.78-16.67,14.4-24.22,19.19-8.64,5.49-28.3,15.33-39.38,20C35.92,156.5,43,146.32,43,139.59Z"/>
                </g>
                <g class="c4">
                    <path class="left" d="M70.91,146c7.55-4.79,18.73-14.41,24.22-19.19,9.59,10.56,27,20.8,27,51.1H28.16c0-3.6,1.42-7.7,3.37-11.94C42.61,161.37,62.27,151.53,70.91,146Z"/>
                </g>
                <g class="extras">
                    <path class="left" d="M13.56,61.76c0-5.31-3.66-12.61-3.66-16.6s2.33-10.62,5.65-17.59c-5-6,0-9.63,3-11.62S41,4,55.38,4a62,62,0,0,1,24.4,4.64C78.41,27.06,73.18,42.71,72.11,47c-2,8-22,67-22,67l-12,5-1,.44A122.2,122.2,0,0,1,24.84,122c-10.86,1.47-12-4.93-12.09-6.81a61.63,61.63,0,0,1,.69-10.53c-3.87-.9-3-3.48-2-5.27-3-3.27-2.22-4.07-1.22-8.39-1.33-1.66-3-.66-5-2.65s-1.33-5.31,0-7.64S13.56,67.07,13.56,61.76Z"/>
                </g>
                <g class="annotations">
                    <text class="t" transform="translate(75.94 52.03)">C2</text>
                    <circle cx="89.89" cy="84.85" r="2.55"/>
                    <text class="t" transform="translate(64.94 131.03)">C3</text>
                    <circle cx="53.89" cy="138.85" r="2.55"/>
                    <text class="t" transform="translate(88.94 173.03)">C4</text>
                    <circle cx="82.89" cy="154.85" r="2.55"/>
                    <path class="l" d="M38.87,118.33c4.55-1.67,13.94-5.54,16.37-6.76S66.32,107,66.32,90c.76,1.22,1.67,2,3.8-.3S76.5,77.25,76.5,71s-2.59-15.34-11.09-9.87"/>
                </g>
            </svg>
        `;
        // tslint:enable:max-line-length
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = this.getTemplate();

        if (this.shadowRoot) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
}

customElements.define(RhiIsncsciUiDermatomeDiagramHeadLeft.is, RhiIsncsciUiDermatomeDiagramHeadLeft);
