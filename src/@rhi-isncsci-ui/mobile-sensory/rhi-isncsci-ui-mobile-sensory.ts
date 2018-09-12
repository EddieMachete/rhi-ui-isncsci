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

import { html } from '@rhi-ui/html';

export class RhiIsncsciUiMobileSensory extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-sensory'; }

    public static getTemplate(): string {
        return html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;
                }
            </style>
            <h1>sensory</h1>
        `;
    }

    public static get properties() {
        return {
            ais: { reflectToAttribute: true, type: String, value: '' }
        };
    }

    private uiBindings: {};

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.requestRender();
        this.updateUiBindings();
    }

    public connectedCallback() {
        console.log('connected');
    }

    public disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileSensory.getTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    private updateUiBindings(): void {
        const bindings = this.shadowRoot.querySelectorAll('[bind-to]');
        console.log(bindings);
    }
}

customElements.define(RhiIsncsciUiMobileSensory.is, RhiIsncsciUiMobileSensory);