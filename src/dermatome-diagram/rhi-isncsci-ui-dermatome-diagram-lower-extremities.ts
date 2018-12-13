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

export class RhiIsncsciUiDermatomeDiagramLowerExtremities extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-dermatome-diagram-lower-extremities'; }

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

                :host([l2-right="0"]) .l2 .right,
                :host([l3-right="0"]) .l3 .right,
                :host([l4-right="0"]) .l4 .right,
                :host([l5-right="0"]) .l5 .right,
                :host([s1-right="0"]) .s1 .right,
                :host([s2-right="0"]) .s2 .right,
                :host([s3-right="0"]) .s3 .right,
                :host([l2-left="0"]) .l2 .left,
                :host([l3-left="0"]) .l3 .left,
                :host([l4-left="0"]) .l4 .left,
                :host([l5-left="0"]) .l5 .left,
                :host([s1-left="0"]) .s1 .left,
                :host([s2-left="0"]) .s2 .left,
                :host([s3-left="0"]) .s3 .left {
                    fill: var(--isncsci-diagram-severity-4-color, #000);
                }

                :host([l2-right="0!"]) .l2 .right,
                :host([l3-right="0!"]) .l3 .right,
                :host([l4-right="0!"]) .l4 .right,
                :host([l5-right="0!"]) .l5 .right,
                :host([s1-right="0!"]) .s1 .right,
                :host([s2-right="0!"]) .s2 .right,
                :host([s3-right="0!"]) .s3 .right,
                :host([l2-left="0!"]) .l2 .left,
                :host([l3-left="0!"]) .l3 .left,
                :host([l4-left="0!"]) .l4 .left,
                :host([l5-left="0!"]) .l5 .left,
                :host([s1-left="0!"]) .s1 .left,
                :host([s2-left="0!"]) .s2 .left,
                :host([s3-left="0!"]) .s3 .left {
                    fill: var(--isncsci-diagram-severity-3-color, #333);
                }

                :host([l2-right="1"]) .l2 .right,
                :host([l3-right="1"]) .l3 .right,
                :host([l4-right="1"]) .l4 .right,
                :host([l5-right="1"]) .l5 .right,
                :host([s1-right="1"]) .s1 .right,
                :host([s2-right="1"]) .s2 .right,
                :host([s3-right="1"]) .s3 .right,
                :host([l2-left="1"]) .l2 .left,
                :host([l3-left="1"]) .l3 .left,
                :host([l4-left="1"]) .l4 .left,
                :host([l5-left="1"]) .l5 .left,
                :host([s1-left="1"]) .s1 .left,
                :host([s2-left="1"]) .s2 .left,
                :host([s3-left="1"]) .s3 .left {
                    fill: var(--isncsci-diagram-severity-2-color, #666);
                }

                :host([l2-right="1!"]) .l2 .right,
                :host([l3-right="1!"]) .l3 .right,
                :host([l4-right="1!"]) .l4 .right,
                :host([l5-right="1!"]) .l5 .right,
                :host([s1-right="1!"]) .s1 .right,
                :host([s2-right="1!"]) .s2 .right,
                :host([s3-right="1!"]) .s3 .right,
                :host([l2-left="1!"]) .l2 .left,
                :host([l3-left="1!"]) .l3 .left,
                :host([l4-left="1!"]) .l4 .left,
                :host([l5-left="1!"]) .l5 .left,
                :host([s1-left="1!"]) .s1 .left,
                :host([s2-left="1!"]) .s2 .left,
                :host([s3-left="1!"]) .s3 .left {
                    fill: var(--isncsci-diagram-severity-1-color, #999);
                }

                :host([l2-right="2"]) .l2 .right,
                :host([l3-right="2"]) .l3 .right,
                :host([l4-right="2"]) .l4 .right,
                :host([l5-right="2"]) .l5 .right,
                :host([s1-right="2"]) .s1 .right,
                :host([s2-right="2"]) .s2 .right,
                :host([s3-right="2"]) .s3 .right,
                :host([l2-left="2"]) .l2 .left,
                :host([l3-left="2"]) .l3 .left,
                :host([l4-left="2"]) .l4 .left,
                :host([l5-left="2"]) .l5 .left,
                :host([s1-left="2"]) .s1 .left,
                :host([s2-left="2"]) .s2 .left,
                :host([s3-left="2"]) .s3 .left {
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
            <svg class="dermatome-diagram-lower-extremities"
                 data-name="dermatome-diagram-lower-extremities"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 146 436">
                <title>rhi-isncsci-ui-dermatome-diagram-lower-extremities</title>
                <g class="l2">
                    <path class="right" d="M72.73,140.52V132c5,5,12.85,15.89,16.53,38q.33,2,.57,3.81c-2.75,2.8-6.08,5.45-11.18,6.05C76.28,168.06,73.37,142.79,72.73,140.52Z"/>
                    <path class="left" d="M72.73,140.52V132c-5,5-12.85,15.89-16.53,38q-.33,2-.57,3.81c2.76,2.8,6.09,5.45,11.18,6.05C69.19,168.06,72.09,142.79,72.73,140.52Z"/>
                </g>
                <g class="l3">
                    <path class="right" d="M89.83,173.81c2.06,15.52-.17,24.34-.17,42.19,0,18.89,3.59,29.34,5.56,40.16l-6.46,6c0-.29-.09-.58-.14-.86-1.84-10.29-7.35-16.89-7.35-33.77s-.19-35.76-2.58-47.48a1.29,1.29,0,0,0,0-.19C83.75,179.26,87.08,176.61,89.83,173.81Z"/>
                    <path class="left" d="M55.63,173.81c-2.06,15.52.17,24.34.17,42.19,0,18.89-3.59,29.34-5.55,40.16l6.46,6c0-.29.08-.58.13-.86,1.85-10.29,7.35-16.89,7.35-33.77s.2-35.76,2.58-47.48a1.29,1.29,0,0,0,0-.19C61.72,179.26,58.39,176.61,55.63,173.81Z"/>
                </g>
                <g class="l4">
                    <path class="right" d="M88.76,262.16h0l6.46-6A71,71,0,0,1,96.46,269c0,22-2,43-2,58,0,34,8.7,51,8.7,65,0,6.89-2.63,12.67-3.55,17.36a3.47,3.47,0,0,0-1.12-3.31c-.8-.86-2-2.39-2-3.78a9.57,9.57,0,0,1,1.59-5.16c0-22.88-12.83-42.2-12.83-74.83C85.26,291.9,90.18,272.6,88.76,262.16Z"/>
                    <path class="left" d="M56.71,262.16h0l-6.46-6A70.07,70.07,0,0,0,49,269c0,22,2,43,2,58,0,34-8.7,51-8.7,65,0,6.89,2.64,12.67,3.55,17.36A3.49,3.49,0,0,1,47,406.05c.8-.86,2-2.39,2-3.78a9.48,9.48,0,0,0-1.59-5.16c0-22.88,12.84-42.2,12.84-74.83C60.21,291.9,55.28,272.6,56.71,262.16Z"/>
                </g>
                <g class="l5">
                    <path class="right" d="M117.78,313a26.32,26.32,0,0,0,4.41-9.37,32.27,32.27,0,0,0,1.27-4.6c2-6.87,5.94-31.53,8-43.86q.44,2.7,1.14,5.56c2.79,11.13,7.7,24.29,7.7,46.09,0,13.51-3.4,35.73-9.23,53.24C126.47,373.73,124.78,381,124,389c3.48.17,3.36,1.57,4.13,3.84,2.23-.09,2.86.38,3.32,2.24a3.78,3.78,0,0,1,3.42,2.41c-5.56,6.13-12.52,13.05-15.39,13.05s-6.15-3.56-7.5-10.5c-3.5-18-1.71-53.84,2.5-77A37.45,37.45,0,0,1,117.78,313Z"/>
                    <path class="left" d="M27.68,313a26.66,26.66,0,0,1-4.41-9.37A32.27,32.27,0,0,1,22,299c-2-6.87-5.94-31.53-8-43.86-.29,1.8-.66,3.65-1.14,5.56-2.78,11.13-7.7,24.29-7.7,46.09,0,13.51,3.4,35.73,9.24,53.24C19,373.73,20.69,381,21.48,389c-3.48.17-3.36,1.57-4.12,3.84-2.24-.09-2.87.38-3.33,2.24a3.78,3.78,0,0,0-3.41,2.41C16.18,403.58,23.14,410.5,26,410.5s6.15-3.56,7.5-10.5c3.5-18,1.71-53.84-2.5-77A36.76,36.76,0,0,0,27.68,313Z"/>
                </g>
                <g class="s1">
                    <path class="right" d="M99.61,409.36h0c.92-4.69,3.55-10.47,3.55-17.36,0-14-8.7-31-8.7-65,0-5.28.25-11.32.58-17.87,3.52,5.27,7.4,8.87,11.42,8.87,5.42,0,8.93-2.09,11.32-5a37.45,37.45,0,0,0-3.32,10c-4.21,23.16-6,59-2.5,77,1.35,6.94,4.5,10.5,7.5,10.5s9.83-6.92,15.39-13.05a3.26,3.26,0,0,1,.19,1.38c1.92-.4,2.6.78,2.45,2.85,3.63.86,3.27,3.14,2.85,4.57-.76,2.6-2.12,2.31-2.85,4a10.66,10.66,0,0,1-3.64,4.5c-1.77,1.46-5.38,3.36-9.14,6.16-4.3,3.21-3.21,7.23-10,10.06-5.14,2.15-12.18.93-14.83-2.78s-2-8.21-1.72-11.12S99.42,410.81,99.61,409.36Z"/>
                    <path class="left" d="M45.85,409.36h0c-.91-4.69-3.55-10.47-3.55-17.36,0-14,8.7-31,8.7-65,0-5.28-.25-11.32-.57-17.87C46.91,314.4,43,318,39,318c-5.42,0-8.92-2.09-11.32-5A36.76,36.76,0,0,1,31,323c4.21,23.16,6,59,2.5,77-1.35,6.94-4.5,10.5-7.5,10.5s-9.82-6.92-15.38-13.05a3.42,3.42,0,0,0-.2,1.38c-1.92-.4-2.6.78-2.45,2.85-3.62.86-3.26,3.14-2.84,4.57.76,2.6,2.11,2.31,2.84,4a10.62,10.62,0,0,0,3.65,4.5c1.77,1.46,5.38,3.36,9.13,6.16,4.31,3.21,3.21,7.23,10,10.06,5.15,2.15,12.19.93,14.83-2.78S47.64,420,47.31,417,46.05,410.81,45.85,409.36Z"/>
                </g>
                <g class="s2">
                    <path class="right" d="M83.52,149.06c6.26-4.88,13-12.95,18.09-22.34a138.15,138.15,0,0,0,38.52,43.59,536.86,536.86,0,0,1-7.85,60.6,63.82,63.82,0,0,0-.85,24.23c-2,12.33-6,37-8,43.86s-4,19-17,19c-4,0-7.9-3.6-11.42-8.87.59-12.05,1.42-25.88,1.42-40.13,0-17-6.8-27-6.8-53,0-19.26,2.6-28-.4-46A96.5,96.5,0,0,0,83.52,149.06Z"/>
                    <path class="left" d="M62,149.06c-6.26-4.88-13-12.95-18.09-22.34A138.17,138.17,0,0,1,5.33,170.31a536,536,0,0,0,7.86,60.6A64,64,0,0,1,14,255.14c2,12.33,6,37,8,43.86s4,19,17,19c4,0,7.9-3.6,11.43-8.87C49.84,297.08,49,283.25,49,269c0-17,6.8-27,6.8-53,0-19.26-2.6-28,.4-46A96.46,96.46,0,0,1,62,149.06Z"/>
                </g>
                <g class="s3">
                    <path class="right" d="M109.46,99c0,24.68-22.28,52.05-34.81,54.76-.92-6.79-1.64-12.23-1.92-13.24V52C102.73,52,109.46,92,109.46,99Z"/>
                    <path class="left" d="M36,99c0,24.68,22.29,52.05,34.81,54.76.92-6.79,1.64-12.23,1.92-13.24V52C42.73,52,36,92,36,99Z"/>
                </g>
                <g class="extras">
                    <path d="M72.73,52c30,0,36.73,40,36.73,47,0,9.35-3.2,19.08-7.85,27.72a138.26,138.26,0,0,0,38.52,43.59c.81-10.85,1.33-22.37,1.33-34,0-60.59-7.1-92.57-10.67-113.63C122.15,17.06,104.37,4,72.73,4s-49.41,13.06-58,18.72C11.1,43.78,4,75.76,4,136.35c0,11.59.53,23.11,1.33,34a138.28,138.28,0,0,0,38.53-43.59C39.2,118.08,36,108.35,36,99,36,92,42.73,52,72.73,52Z"/>
                    <ellipse cx="72.73" cy="101.65" rx="17.5" ry="22.65"/>
                </g>
                <g class="annotations">
                    <text class="t" transform="translate(79.84 164.56)">L<tspan x="-0.15" y="9.93">2</tspan></text>
                    <text class="t" transform="translate(61.84 164.56)">L<tspan x="-0.15" y="9.93">2</tspan></text>
                    <text class="t" transform="translate(82.78 188)">L<tspan x="-0.15" y="9.93">3</tspan></text>
                    <text class="t" transform="translate(58.78 188)">L<tspan x="-0.15" y="9.93">3</tspan></text>
                    <text class="t" transform="translate(88.1 316.33)">L<tspan x="-0.15" y="9.93">4</tspan></text>
                    <text class="t" transform="translate(53.1 316.33)">L<tspan x="-0.15" y="9.93">4</tspan></text>
                    <text class="t" transform="translate(118.47 350.49)">L5</text>
                    <text class="t" transform="translate(18.47 350.49)">L5</text>
                    <text class="t" transform="translate(99.08 336.19)">S1</text>
                    <circle cx="115.89" cy="422.85" r="2.55"/>
                    <text class="t" transform="translate(37.08 336.19)">S1</text>
                    <circle cx="29.89" cy="422.85" r="2.55"/>
                    <text class="t" transform="translate(23.17 193.03)">S2</text>
                    <circle cx="32.89" cy="243.85" r="2.55"/>
                    <path class="l" d="M23.88,235.81c0,6.62-1.41,5.42-1.41,8.59"/>
                    <path class="l" d="M48.68,234.12a19.29,19.29,0,0,0,.63,9.1"/>
                    <text class="t" transform="translate(112.17 193.03)">S2</text>
                    <path class="l" d="M122,235.81c0,6.62,1.41,5.42,1.41,8.59"/>
                    <path class="l" d="M97.18,234.12a19.29,19.29,0,0,1-.63,9.1"/>
                    <circle cx="112.89" cy="243.85" r="2.55"/>
                    <text class="t" transform="translate(65.37 73.84)"><tspan xml:space="preserve">S  3</tspan></text>
                    <circle cx="49.89" cy="120.85" r="2.55"/>
                    <circle cx="95.89" cy="120.85" r="2.55"/>
                    <text class="t" transform="translate(114.5 103.57)">S4-5</text>
                    <!-- buttocks -->
                    <path class="l" d="M108.86,122.15c-10,4.25-27.41,3.95-35.73-3.65-8.32,7.6-25.7,7.9-35.73,3.65"/>
                    <polyline class="l" points="76.38 57.21 73.13 60.46 73.13 60.46 69.88 57.21"/>
                    <line class="l" x1="73.13" y1="60.46" x2="73.13" y2="118.5"/>
                    <circle cx="73.13" cy="118.5" r="3.97"/>
                    <line class="l" x1="123.25" y1="106.34" x2="73.53" y2="118.5"/>
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

customElements.define(RhiIsncsciUiDermatomeDiagramLowerExtremities.is, RhiIsncsciUiDermatomeDiagramLowerExtremities);
