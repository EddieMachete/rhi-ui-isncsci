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

import { template } from './rhi-isncsci-ui-mobile-sensory-template';

export class RhiIsncsciUiMobileSensory extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-sensory'; }

    public static getTemplate(): string {
        return template;
    }

    public static get properties() {
        return {
            c2: { reflectToAttribute: true, type: String, value: '' },
            c3: { reflectToAttribute: true, type: String, value: '' },
            c4: { reflectToAttribute: true, type: String, value: '' },
            c5: { reflectToAttribute: true, type: String, value: '' },
            c6: { reflectToAttribute: true, type: String, value: '' },
            c7: { reflectToAttribute: true, type: String, value: '' },
            c8: { reflectToAttribute: true, type: String, value: '' },
            dermatome: { reflectToAttribute: true, type: String, value: '' },
            'dermatome-score': { reflectToAttribute: true, type: String, value: '' },
            instructions: { reflectToAttribute: true, type: String, value: 'Use the ! and * symbols to indicate impairment not due to SCI.' },
            l1: { reflectToAttribute: true, type: String, value: '' },
            l2: { reflectToAttribute: true, type: String, value: '' },
            l3: { reflectToAttribute: true, type: String, value: '' },
            l4: { reflectToAttribute: true, type: String, value: '' },
            l5: { reflectToAttribute: true, type: String, value: '' },
            'non-sci-impairment-reason': { reflectToAttribute: true, type: String, value: '' },
            'non-sci-impairment-comments': { reflectToAttribute: true, type: String, value: '' },
            nl: { reflectToAttribute: true, type: String, value: '' },
            'nl-label': { reflectToAttribute: true, type: String, value: 'NL:' },
            'non-sci-impairment-comments-label': { reflectToAttribute: true, type: String, value: 'Specify:' },
            'non-sci-impairment-label': { reflectToAttribute: true, type: String, value: 'If sensory impairment not due to SCI, please indicate the reason:' },
            'non-sci-impairment-reason-none': { reflectToAttribute: true, type: String, value: 'Select one' },
            'non-sci-impairment-reason-plexopathy': { reflectToAttribute: true, type: String, value: 'Plexopathy' },
            'non-sci-impairment-reason-neuropathy': { reflectToAttribute: true, type: String, value: 'Peripheral neuropathy' },
            'non-sci-impairment-reason-myoneural': { reflectToAttribute: true, type: String, value: 'Pre-existing myoneural disease (e.g. Stroke, MS, etc.)' },
            'non-sci-impairment-reason-pain': { reflectToAttribute: true, type: String, value: 'Pain' },
            'non-sci-impairment-reason-atrophy': { reflectToAttribute: true, type: String, value: 'Disuse atrophy' },
            'non-sci-impairment-reason-other': { reflectToAttribute: true, type: String, value: 'Other (specify:)' },
            'propagate-value': { reflectToAttribute: true, type: Boolean, value: false },
            'propagate-value-label': { reflectToAttribute: true, type: String, value: 'Propagate values down' },
            s1: { reflectToAttribute: true, type: String, value: '' },
            s2: { reflectToAttribute: true, type: String, value: '' },
            s3: { reflectToAttribute: true, type: String, value: '' },
            's4-5': { reflectToAttribute: true, type: String, value: '' },
            t1: { reflectToAttribute: true, type: String, value: '' },
            t2: { reflectToAttribute: true, type: String, value: '' },
            t3: { reflectToAttribute: true, type: String, value: '' },
            t4: { reflectToAttribute: true, type: String, value: '' },
            t5: { reflectToAttribute: true, type: String, value: '' },
            t6: { reflectToAttribute: true, type: String, value: '' },
            t7: { reflectToAttribute: true, type: String, value: '' },
            t8: { reflectToAttribute: true, type: String, value: '' },
            t9: { reflectToAttribute: true, type: String, value: '' },
            t10: { reflectToAttribute: true, type: String, value: '' },
            t11: { reflectToAttribute: true, type: String, value: '' },
            t12: { reflectToAttribute: true, type: String, value: '' },
            total: { reflectToAttribute: true, type: String, value: '' },
            'total-label': { reflectToAttribute: true, type: String, value: 'Total:' }
        };
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        // tslint:disable-next-line:forin
        for (const key in RhiIsncsciUiMobileSensory.properties) {
            attributes.push(key.toLowerCase());
        }

        return attributes;
    }

    private uiBindings = {
        dermatome: null,
        dermatomes: null,
        'dermatome-score': null,
        'non-sci-impairment-reason': null,
        'non-sci-impairment-comments': null
    };
    
    private props = {};
    private selectedDermatome: HTMLElement;
    private dermatomeClickHandler;
    private propagateValueChangeHandler;
    private scoreChangeHandler;
    private nonSciImpairmentReasonChangeHandler;
    private nonSciImpairmentCommentsChangeHandler;

    public constructor() {
        super();

        this.dermatomeClickHandler = (e) => this.onDermatomeClick(e);
        this.propagateValueChangeHandler = (e) => this.onPropagateValueChange(e);
        this.scoreChangeHandler = (e) => this.onScoreChange(e);
        this.nonSciImpairmentReasonChangeHandler = (e) => this.onNonSciImpairmentReasonChange(e);
        this.nonSciImpairmentCommentsChangeHandler = (e) => this.onNonSciImpairmentCommentsChange(e);

        this.attachShadow({ mode: 'open' });
        this.requestRender();
        this.initializeDeclaredProperties();
        this.updateUiBindings();
    }

    public connectedCallback() {
        this.uiBindings.dermatomes.addEventListener('click', this.dermatomeClickHandler);
        this.uiBindings['propagate-value'].addEventListener('change', this.propagateValueChangeHandler);
        this.uiBindings['dermatome-score'].addEventListener('change', this.scoreChangeHandler);
        this.uiBindings['non-sci-impairment-reason'].addEventListener('change', this.nonSciImpairmentReasonChangeHandler);
        this.uiBindings['non-sci-impairment-comments'].addEventListener('change', this.nonSciImpairmentCommentsChangeHandler);
    }

    public disconnectedCallback() {
        this.uiBindings.dermatomes.removeEventListener('click', this.dermatomeClickHandler);
        this.uiBindings['propagate-value'].removeEventListener('change', this.propagateValueChangeHandler);
        this.uiBindings['dermatome-score'].removeEventListener('change', this.scoreChangeHandler);
        this.uiBindings['non-sci-impairment-reason'].removeEventListener('change', this.onNonSciImpairmentReasonChange);
        this.uiBindings['non-sci-impairment-comments'].removeEventListener('change', this.onNonSciImpairmentCommentsChange);
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileSensory.getTemplate();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    private initializeDeclaredProperties(): void {
        const props: any = RhiIsncsciUiMobileSensory.properties;

        for (let key in props) {
            this.props[key] = props[key].value;
        }
    }

    private updateUiBindings(): void {
        const elements: NodeListOf<Element> = this.shadowRoot.querySelectorAll('[bind-to]');

        for (let i: number = 0; i < elements.length; i++) {
            const element: Element = elements[i];
            const bindTo: string = element.getAttribute('bind-to');
            this.uiBindings[bindTo] = element;

            const property = RhiIsncsciUiMobileSensory.properties[bindTo]

            if (property && property.value) {
                if (property.useProperty) {
                    element[property.useProperty] = property.value;
                } else {
                    element.innerHTML = property.value;
                }
            }
        }
    }

    private selectDermatome(dermatomeName: string): void {
        if (!this.uiBindings.dermatomes) {
            return;
        }

        if (this.selectedDermatome) {
            this.selectedDermatome.classList.remove('selected');
            this.selectedDermatome = null;
        }

        const nameToUpper: string = dermatomeName.toUpperCase();
        let index: number = 0;

        while (index < this.uiBindings.dermatomes.childElementCount && !this.selectedDermatome) {
            const dermatome: HTMLElement = this.uiBindings.dermatomes.children[index] as HTMLElement;

            if (dermatome.firstElementChild.innerHTML === nameToUpper) {
                this.selectedDermatome = dermatome;
                dermatome.classList.add('selected');
            }

            index++;
        }
    }

    public onDermatomeClick(e): boolean {
        if (e.target.classList.contains('dermatomes')) {
            return true;
        }

        let dermatomeName;

        if (e.target.classList.contains('score')) {
            dermatomeName = e.target.getAttribute('bind-to').toUpperCase();
        } else if (e.target.classList.contains('name')) {
            dermatomeName = e.target.innerHTML.toUpperCase();
        } else if (e.target.classList.contains('dermatome')) {
            dermatomeName = e.target.firstElementChild.innerHTML.toUpperCase();
        }

        const event: CustomEvent = new CustomEvent('dermatome-selected', { detail: { dermatome: dermatomeName } });
        this['dispatchEvent'](event);

        return true;
    }

    public onPropagateValueChange(e: Event): boolean {
        const event: CustomEvent =
            new CustomEvent(
                'propagate-value-changed',
                { 
                    detail: {
                        propagateValue: this.uiBindings['propagate-value'].checked
                    }
                }
            );

        this['dispatchEvent'](event);

        return true;
    }

    public onScoreChange(e: Event): boolean {
        const event: CustomEvent =
            new CustomEvent(
                'dermatome-score-changed',
                { 
                    detail: {
                        dermatome: this.getAttribute('dermatome'),
                        score: this.uiBindings['dermatome-score'].value
                    }
                }
            );

        this['dispatchEvent'](event);

        return true;
    }

    public onNonSciImpairmentReasonChange(e: Event): boolean {
        const event: CustomEvent =
            new CustomEvent(
                'non-sci-impairment-reason-changed',
                { 
                    detail: {
                        dermatome: this.getAttribute('dermatome'),
                        reason: this.uiBindings['non-sci-impairment-reason'].value
                    }
                }
            );

        this['dispatchEvent'](event);

        return true;
    }

    public onNonSciImpairmentCommentsChange(e: Event): boolean {
        const event: CustomEvent =
            new CustomEvent(
                'non-sci-impairment-comments-changed',
                { 
                    detail: {
                        dermatome: this.getAttribute('dermatome'),
                        comments: this.uiBindings['non-sci-impairment-comments'].value
                    }
                }
            );

        this['dispatchEvent'](event);

        return true;
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        if (name === 'dermatome') {
            this.selectDermatome(newValue);
            this.uiBindings.dermatome.innerHTML = newValue.toUpperCase();
            return;
        }

        if (name === 'dermatome-score') {
            this.uiBindings['dermatome-score'].value = newValue;
            return;
        }

        if (name === 'non-sci-impairment-reason') {
            this.uiBindings['non-sci-impairment-reason'].value = newValue;
            return;
        }

        if (name === 'non-sci-impairment-comments') {
            this.uiBindings['non-sci-impairment-comments'].value = newValue;

            return;
        }

        if (name === 'propagate-value') {
            this.uiBindings['propagate-value'].checked = newValue !== null;
            this.onPropagateValueChange(null);
            
            return;
        }

        const element: Element = this.uiBindings[name];

        if (element) {
            element.innerHTML = newValue;
        }
    }
}

customElements.define(RhiIsncsciUiMobileSensory.is, RhiIsncsciUiMobileSensory);