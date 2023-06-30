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

import { template as RhiIsncsciUiMobileTotalsTemplate } from './rhi-isncsci-ui-mobile-totals-template';

interface IEventDetails {
    eventName: string;
    target: Element;
    handler: EventListener;
}

export class RhiIsncsciUiMobileTotals extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-totals'; }

    public static getTemplate(): string {
        return RhiIsncsciUiMobileTotalsTemplate;
    }

    private static getOptionTemplate(label: string, value: string, selectedValue: string) {
        return value === selectedValue
            ? `<option value="${value}" selected>${label}</option>`
            : `<option value="${value}">${label}</option>`;
    }

    public static get properties(): {
        [index: string]: {
            reflectToAttribute: boolean,
            type: {},
            useProperty: string,
            value: string | boolean | number,
        },
    } {
        return {
            'ais': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'comments': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'complete-incomplete': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'dap': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-lower-motor': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-motor-nl': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-motor-nl-zpp': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-prick': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-sensory-nl': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-sensory-nl-zpp': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-touch': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'left-upper-motor': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'nli': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-lower-motor': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-motor-nl': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-motor-nl-zpp': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-prick': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-sensory-nl': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-sensory-nl-zpp': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-touch': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'right-upper-motor': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'text-ais': { reflectToAttribute: true, type: String, useProperty: '', value: 'AIS' },
            'text-comments': { reflectToAttribute: true, type: String, useProperty: '', value: 'General comments:' },
            'text-complete-incomplete': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Complete or incomplete',
            },
            'text-dap': { reflectToAttribute: true, type: String, useProperty: '', value: 'DAP' },
            'text-dap-description': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Deep anal pressure',
            },
            'text-left': { reflectToAttribute: true, type: String, useProperty: '', value: 'Left' },
            'text-light-touch': { reflectToAttribute: true, type: String, useProperty: '', value: 'Light touch' },
            'text-lower-motor': { reflectToAttribute: true, type: String, useProperty: '', value: 'Lower motor' },
            'text-motor-nl': { reflectToAttribute: true, type: String, useProperty: '', value: 'Motor NL' },
            'text-motor-nl-zpp': { reflectToAttribute: true, type: String, useProperty: '', value: 'Motor NL ZPP' },
            'text-nli': { reflectToAttribute: true, type: String, useProperty: '', value: 'NLI' },
            'text-option-no': { reflectToAttribute: true, type: String, useProperty: '', value: 'No' },
            'text-option-nt': { reflectToAttribute: true, type: String, useProperty: '', value: 'NT' },
            'text-option-yes': { reflectToAttribute: true, type: String, useProperty: '', value: 'Yes' },
            'text-pin-prick': { reflectToAttribute: true, type: String, useProperty: '', value: 'Pin prick' },
            'text-right': { reflectToAttribute: true, type: String, useProperty: '', value: 'Right' },
            'text-sensory-nl': { reflectToAttribute: true, type: String, useProperty: '', value: 'Sensory NL' },
            'text-sensory-nl-zpp': { reflectToAttribute: true, type: String, useProperty: '', value: 'Sensory NL ZPP' },
            'text-upper-motor': { reflectToAttribute: true, type: String, useProperty: '', value: 'Upper motor' },
            'text-vac': { reflectToAttribute: true, type: String, useProperty: '', value: 'VAC' },
            'text-vac-description': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Voluntary anal contraction',
            },
            'vac': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
        };
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        for (const key in RhiIsncsciUiMobileTotals.properties) {
            if (RhiIsncsciUiMobileTotals.properties.hasOwnProperty(key)) {
                attributes.push(key.toLowerCase());
            }
        }

        return attributes;
    }

    private uiBindings: {
        [index: string]: HTMLElement[] | null,
        'comments': HTMLInputElement[] | null,
        'comments-component': HTMLElement[] | null,
        'dap': HTMLInputElement[] | null,
        'vac': HTMLInputElement[] | null,
    } = {
            'comments': null,
            'comments-component': null,
            'dap': null,
            'vac': null,
        };
    private eventBindings: IEventDetails[] = [];
    private props: { [index: string]: string | boolean | number } = {};

    // private commentsClass: string = 'comments-component';

    public constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.requestRender();
        this.initializeDeclaredProperties();
        this.updateUiBindings();
    }

    public connectedCallback() {
        // console.log(this.uiBindings);
        // Wire up Voluntary Anal Contraction events
        if (this.uiBindings.vac) {
            const analContractionChangeHandler = (e: Event) => this.handleVacChange(e);
            const analContraction: HTMLElement = this.uiBindings.vac[0];
            analContraction.addEventListener('change', analContractionChangeHandler);
            this.eventBindings.push({
                eventName: 'change',
                handler: analContractionChangeHandler,
                target: analContraction,
            });
        }

        // Wire up Deep Anal Pressure events
        if (this.uiBindings.dap) {
            const analSensationChangeHandler = (e: Event) => this.handleDapChange(e);
            const analSensation: Element = this.uiBindings.dap[0];
            analSensation.addEventListener('change', analSensationChangeHandler);
            this.eventBindings.push({
                eventName: 'change',
                handler: analSensationChangeHandler,
                target: analSensation,
            });
        }

        // Wire up the comments events
        if (this.uiBindings.comments && this.uiBindings['comments-component']) {
            const commentsElement: HTMLInputElement = this.uiBindings.comments[0];
            const commentsComponent: HTMLElement = this.uiBindings['comments-component'][0];
            const commentsChangeHandler: EventListener = () => this.handleCommentsChange();
            const commentsFocusHandler: EventListener = () => commentsComponent.classList.add('active');
            const commentsBlurHandler: EventListener = () => commentsComponent.classList.remove('active');
            commentsElement.addEventListener('change', commentsChangeHandler);
            commentsElement.addEventListener('focus', commentsFocusHandler);
            commentsElement.addEventListener('blur', commentsBlurHandler);

            this.eventBindings.push({
                eventName: 'change',
                handler: commentsChangeHandler,
                target: commentsElement,
            });

            this.eventBindings.push({
                eventName: 'focus',
                handler: commentsFocusHandler,
                target: commentsElement,
            });

            this.eventBindings.push({
                eventName: 'blur',
                handler: commentsBlurHandler,
                target: commentsElement,
            });
        }
    }

    public disconnectedCallback() {
        this.eventBindings.forEach((eventDetails) => {
            eventDetails.target
                .removeEventListener(eventDetails.eventName, eventDetails.handler);
        });
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        const commentsElement: HTMLInputElement | null = this.uiBindings.comments ? this.uiBindings.comments[0] : null;
        if (name === 'comments' && commentsElement && commentsElement.value !== newValue) {
            commentsElement.value = newValue;
            return;
        }

        const elements: HTMLElement[] | null = this.uiBindings[name];

        if (elements) {
            elements.forEach((element: Element) => {
                if (element.classList.contains('cell-select')) {
                    (element as HTMLSelectElement).value = newValue;
                } else {
                    element.innerHTML = newValue;
                }
            });
        }
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileTotals.getTemplate();
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    private initializeDeclaredProperties(): void {
        const props: { [index: string]: { value: string | boolean | number } } = RhiIsncsciUiMobileTotals.properties;

        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                this.props[key] = props[key].value;
            }
        }
    }

    private updateUiBindings(): void {
        const elements: HTMLElement[] = Array.from(this.shadowRoot!.querySelectorAll('[bind-to]'));

        for (const element of elements) {
            const bindTo: string = element.getAttribute('bind-to') as string;

            // In rare cases, we may want to share a binding.
            // It happens with UI Labels that repeat in a template, like the word 'right' repeated more than once.
            const binding: HTMLElement[] | null = this.uiBindings[bindTo];
            if (binding) {
                binding.push(element);
            } else {
                this.uiBindings[bindTo] = [element];
            }

            const property = RhiIsncsciUiMobileTotals.properties[bindTo];

            if (property && property.value) {
                if (property.useProperty) {
                    (element as any)[property.useProperty] = property.value;
                } else {
                    (element).innerHTML = property.value.toString();
                }
            }

            // Add event listeners to interactive cells
            if (element.classList.contains('cell') && element.classList.contains('interactive') && bindTo) {
                const clickEventHandler = () => this.handleCellClick(bindTo);
                element.addEventListener('click', clickEventHandler);

                this.eventBindings.push({
                    eventName: 'click',
                    handler: clickEventHandler,
                    target: element,
                });
            }
        }
    }

    private handleCellClick(cellName: string): boolean {
        const event: CustomEvent = new CustomEvent('interactive-cell-clicked', { detail: { name: cellName } });
        this.dispatchEvent(event);

        return true;
    }

    private handleCommentsChange(): boolean {
        if (!this.uiBindings.comments) {
            return true;
        }

        const event: CustomEvent =
            new CustomEvent('comments-change', { detail: { comments: this.uiBindings.comments[0].value } });
        this.dispatchEvent(event);

        return true;
    }

    private handleDapChange(e: Event): boolean {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const event: CustomEvent = new CustomEvent('dap-change', { detail: { dap: target.value } });
        this.dispatchEvent(event);

        return true;
    }

    private handleVacChange(e: Event): boolean {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const event: CustomEvent = new CustomEvent('vac-change', { detail: { vac: target.value } });
        this.dispatchEvent(event);

        return true;
    }
}

customElements.define(RhiIsncsciUiMobileTotals.is, RhiIsncsciUiMobileTotals);
