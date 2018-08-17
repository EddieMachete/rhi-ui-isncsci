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

//import { html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { html, TemplateResult, render } from '../../../node_modules/lit-html/lit-html.js';

export class RhiIsncsciUiMobileSensory extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-sensory'; }

    public get template() {
        return (props): TemplateResult => html`
            <!-- shadow DOM for your element -->
            <style>
                :host {
                    display: block;
                }
            </style>
            <h1>sensory</h1>
        `;
    }

    public static get properties(): any {
        return {
            ais: { reflectToAttribute: true, type: String, value: '' }
        };
    }

    private commentsClass: string = '';

    public constructor() {
        super();
        
        this.attachShadow({mode: 'open'});

        console.log(this.shadowRoot);
        render(this.template({vac: 'Yes', dap:'Yes'}), this.shadowRoot);
        //render(this._render({}), this.shadowRoot);

        // // ToDo: For some reason the lit element is not initializing
        // const props: any = RhiIsncsciUiMobileSensory.properties;
        // for (let key in props) {
        //     this[key] = props[key].value;
        // }
    }

    public connectedCallback() {
        console.log('connected');
    }
      
    public disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }
      
    public adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }
    
    //static get observedAttributes() {return ['w', 'l']; }
    // public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
    //     super.attributeChangedCallback(name, oldValue, newValue, namespace);


    //     // if (oldValue === newValue || !/^(preview|value)$/.test(name)) {
    //     //     return;
    //     // }
        
    //     // Check if the comments element is available.
    //     // When the commets attribute is set straight on the markup, this can be called before the
    //     // corresponding TextArea is available.
    //     if (name === 'comments' && this.commentsElement) {
    //         this.commentsElement.value = newValue;
    //     }

    //     this.requestRender();
    // }
}

customElements.define(RhiIsncsciUiMobileSensory.is, RhiIsncsciUiMobileSensory);