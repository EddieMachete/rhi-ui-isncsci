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

export class RhiIsncsciUiMobileSensoryDemo extends HTMLElement {
    public static getTemplate(props): string {
        return html`
            <!-- shadow DOM for your element -->
            <!-- RHI Blue: #007DC2 -->
            <style>
                :host {
                    display: block;
                }

                rhi-ui-demo-snippet,
                rhi-ui-markdown-viewer {
                    display: block;
                    margin-bottom: 48px;
                }

                .container {
                    height: 536px;
                    margin: -16px;
                    position: relative;
                }

                .container rhi-isncsci-ui-mobile-sensory {
                    bottom: 0;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                }
            </style>
            <rhi-ui-markdown-viewer id="readme-viewer" class="readme"></rhi-ui-markdown-viewer>
            <rhi-ui-demo-snippet class="snippet default" snippet-title="Default">
                <div class="container">
                    <rhi-isncsci-ui-mobile-sensory id="sensory-input"
                                                   nl="int"
                                                   total="56"></rhi-isncsci-ui-mobile-sensory>
                </div>
            </rhi-ui-demo-snippet>
            <rhi-ui-demo-snippet class="snippet default" snippet-title="Default">
                <div class="container">
                    <rhi-isncsci-ui-mobile-sensory id="motor-input"
                                                   nl="int"
                                                   total="56"
                                                   input-type="motor-top"></rhi-isncsci-ui-mobile-sensory>
                </div>
            </rhi-ui-demo-snippet>
        `;
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        // tslint:disable-next-line:forin
        for (const key in RhiIsncsciUiMobileSensoryDemo.properties) {
            attributes.push(key.toLowerCase());
        }

        return attributes;
    }

    private props = {};

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.requestRender();
    }

    public static get is(): string { return 'rhi-isncsci-ui-mobile-sensory-demo'; }

    public static get properties() {
        return {
            'file-uri': {
                type: String,
                value: ''
            }
        };
    }

    public connectedCallback(): void {
        this.shadowRoot.getElementById('readme-viewer').setAttribute('src', this['file-uri']);
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        this.props[name] = newValue;

        if (name === 'file-uri' && newValue) {
            const readmeViewer: HTMLElement = this.shadowRoot.getElementById('readme-viewer');

            if (readmeViewer) {
                readmeViewer.setAttribute('file-uri', newValue);
            }
        }
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileSensoryDemo.getTemplate({});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define(RhiIsncsciUiMobileSensoryDemo.is, RhiIsncsciUiMobileSensoryDemo);