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

export class RhiIsncsciUiLogoSmall extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-logo-small'; }

    public constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.requestRender();
    }

    public getTemplate(): string {
        return `
            <style>
                :host {
                    display: block;
                    --rhi-isncsci-ui-logo-gray: #999;
                    --rhi-isncsci-ui-logo-orange: #F15A24;
                    --rhi-isncsci-ui-logo-shadow: rgba(0, 0, 0, .15);
                }

                :host([color-palette="black"]) {
                    --rhi-isncsci-ui-logo-gray: #000;
                    --rhi-isncsci-ui-logo-orange: #000;
                }

                :host([color-palette="grayscale"]) {
                    --rhi-isncsci-ui-logo-gray: #999;
                    --rhi-isncsci-ui-logo-orange: #BBB;
                }

                :host([color-palette="white"]) {
                    --rhi-isncsci-ui-logo-gray: #FFF;
                    --rhi-isncsci-ui-logo-orange: #FFF;
                    --rhi-isncsci-ui-logo-shadow: rgba(255, 255, 255, .15);
                }

                .shadow {
                    fill: var(--rhi-isncsci-ui-logo-shadow, rgba(0, 0, 0, .15));
                }

                .gray {
                    fill: var(--rhi-isncsci-ui-logo-gray, #999);
                }

                .orange {
                    fill: var(--rhi-isncsci-ui-logo-orange, #F15A24);
                }

                /*
                 * The :host notation with CSS variables did not work on MS Edge.
                 * The code below has been added so that the component works
                 * on Edge just as on FireFox, Safari, and Chrome,
                 */

                [color-palette="black"] .orange,
                [color-palette="black"] .gray {
                    fill: #000;
                }

                [color-palette="grayscale"] .gray {
                    fill: #999;
                }

                [color-palette="grayscale"] .orange {
                    fill: #BBB;
                }

                [color-palette="white"] .orange,
                [color-palette="white"] .gray {
                    fill: #FFF;
                }

                [color-palette="white"] .shadow {
                    fill: rgba(255, 255, 255, .15);
                }
            </style>
            <!-- shadow DOM for your element -->
            <svg id="rhi-isncsci-ui-logo-small"
                 data-name="Logo"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 126 126">
                <title>rhi-isncsci-ui-logo-small</title>
                <rect class="shadow" x="57.82" y="37.84" width="15.37" height="15.37"/>
                <rect class="shadow" x="37.84" y="37.84" width="15.37" height="15.37"/>
                <rect class="shadow" x="57.82" y="57.82" width="15.37" height="15.37"/>
                <rect class="shadow" x="37.84" y="57.82" width="15.37" height="15.37"/>
                <rect class="shadow" x="77.8" y="37.84" width="15.37" height="15.37"/>
                <rect class="shadow" x="57.82" y="77.8" width="15.37" height="15.37"/>
                <rect class="shadow" x="37.84" y="77.8" width="15.37" height="15.37"/>
                <rect class="shadow" x="77.8" y="77.8" width="15.37" height="15.37"/>
                <rect class="shadow" x="77.8" y="57.82" width="15.37" height="15.37"/>
                <rect class="gray" x="55.98" y="36" width="15.37" height="15.37"/>
                <rect class="gray" x="36" y="36" width="15.37" height="15.37"/>
                <rect class="gray" x="55.98" y="55.98" width="15.37" height="15.37"/>
                <rect class="gray" x="36" y="55.98" width="15.37" height="15.37"/>
                <rect class="gray" x="75.96" y="36" width="15.37" height="15.37"/>
                <rect class="gray" x="55.98" y="75.96" width="15.37" height="15.37"/>
                <rect class="gray" x="36" y="75.96" width="15.37" height="15.37"/>
                <rect class="orange" x="75.96" y="75.96" width="15.37" height="15.37"/>
                <rect class="gray" x="75.96" y="55.98" width="15.37" height="15.37"/>
            </svg>
        `;
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template');
        template.innerHTML = this.getTemplate();
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }
}

customElements.define(RhiIsncsciUiLogoSmall.is, RhiIsncsciUiLogoSmall);
