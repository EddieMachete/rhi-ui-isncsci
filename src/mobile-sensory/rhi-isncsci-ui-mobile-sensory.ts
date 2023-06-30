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

import { template as RhiIsncsciUiMobileSensoryTemplate } from './rhi-isncsci-ui-mobile-sensory-template';

export class RhiIsncsciUiMobileSensory extends HTMLElement {
    public static get is(): string { return 'rhi-isncsci-ui-mobile-sensory'; }

    public static getTemplate(): string {
        return RhiIsncsciUiMobileSensoryTemplate;
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
            'c2': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'c3': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'c4': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'c5': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'c6': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'c7': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'c8': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'dermatome': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'dermatome-score': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'instructions': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Use the ! and * symbols to indicate impairment not due to SCI.',
            },
            'l1': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'l2': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'l3': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'l4': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'l5': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'nl': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'nl-label': { reflectToAttribute: true, type: String, useProperty: '', value: 'NL:' },
            'non-sci-impairment-comments': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'non-sci-impairment-comments-label': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Specify:',
            },
            'non-sci-impairment-label': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'If sensory impairment not due to SCI, please indicate the reason:',
            },
            'non-sci-impairment-reason': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'non-sci-impairment-reason-atrophy': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Disuse atrophy',
            },
            'non-sci-impairment-reason-myoneural': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Pre-existing myoneural disease (e.g. Stroke, MS, etc.)',
            },
            'non-sci-impairment-reason-neuropathy': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Peripheral neuropathy',
            },
            'non-sci-impairment-reason-none': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Select one',
            },
            'non-sci-impairment-reason-other': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Other (specify:)',
            },
            'non-sci-impairment-reason-pain': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Pain',
            },
            'non-sci-impairment-reason-plexopathy': {
                reflectToAttribute: true,
                type: String,
                useProperty: '',
                value: 'Plexopathy',
            },
            'propagate-value': {
                reflectToAttribute: true,
                type: Boolean,
                useProperty: '',
                value: false,
            },
            'propagate-value-label': {
                reflectToAttribute: true, type: String, useProperty: '', value: 'Propagate values down' },
            's1': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            's2': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            's3': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            's4-5': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't1': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't10': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't11': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't12': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't2': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't3': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't4': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't5': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't6': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't7': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't8': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            't9': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'total': { reflectToAttribute: true, type: String, useProperty: '', value: '' },
            'total-label': { reflectToAttribute: true, type: String, useProperty: '', value: 'Total:' },
        };
    }

    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        for (const key in RhiIsncsciUiMobileSensory.properties) {
            if (RhiIsncsciUiMobileSensory.properties.hasOwnProperty(key)) {
                attributes.push(key.toLowerCase());
            }
        }

        return attributes;
    }

    private uiBindings: {
        // { [index: string]: { value: string } }
        [index: string]: HTMLElement | null,
        'dermatome': HTMLElement | null,
        'dermatome-score': HTMLInputElement | null,
        'dermatomes': HTMLElement | null,
        'non-sci-impairment-comments': HTMLInputElement | null,
        'non-sci-impairment-reason': HTMLInputElement | null,
        'propagate-value': HTMLInputElement | null,
    } = {
            'dermatome': null,
            'dermatome-score': null,
            'dermatomes': null,
            'non-sci-impairment-comments': null,
            'non-sci-impairment-reason': null,
            'propagate-value': null,
        };

    private props: { [index: string]: string | boolean | number } = {};
    private selectedDermatome: HTMLElement | null = null;
    private dermatomeClickHandler: (e: MouseEvent) => boolean;
    private propagateValueChangeHandler: () => boolean;
    private scoreChangeHandler: () => boolean;
    private nonSciImpairmentReasonChangeHandler: () => boolean;
    private nonSciImpairmentCommentsChangeHandler: () => boolean;

    public constructor() {
        super();

        this.dermatomeClickHandler = (e: MouseEvent) => this.onDermatomeClick(e);
        this.propagateValueChangeHandler = () => this.onPropagateValueChange();
        this.scoreChangeHandler = () => this.onScoreChange();
        this.nonSciImpairmentReasonChangeHandler = () => this.onNonSciImpairmentReasonChange();
        this.nonSciImpairmentCommentsChangeHandler = () => this.onNonSciImpairmentCommentsChange();

        this.attachShadow({ mode: 'open' });
        this.requestRender();
        this.initializeDeclaredProperties();
        this.updateUiBindings();
    }

    public connectedCallback() {
        if (this.uiBindings.dermatomes) {
            this.uiBindings.dermatomes.addEventListener('click', this.dermatomeClickHandler);
        }

        if (this.uiBindings['propagate-value']) {
            this.uiBindings['propagate-value'].addEventListener('change', this.propagateValueChangeHandler);
        }

        if (this.uiBindings['dermatome-score']) {
            this.uiBindings['dermatome-score'].addEventListener('change', this.scoreChangeHandler);
        }

        if (this.uiBindings['non-sci-impairment-reason']) {
            this.uiBindings['non-sci-impairment-reason']
                .addEventListener('change', this.nonSciImpairmentReasonChangeHandler);
        }

        if (this.uiBindings['non-sci-impairment-comments']) {
            this.uiBindings['non-sci-impairment-comments']
                .addEventListener('change', this.nonSciImpairmentCommentsChangeHandler);
        }
    }

    public disconnectedCallback() {
        if (this.uiBindings.dermatomes) {
            this.uiBindings.dermatomes.removeEventListener('click', this.dermatomeClickHandler);
        }

        if (this.uiBindings['propagate-value']) {
            this.uiBindings['propagate-value'].removeEventListener('change', this.propagateValueChangeHandler);
        }

        if (this.uiBindings['dermatome-score']) {
            this.uiBindings['dermatome-score'].removeEventListener('change', this.scoreChangeHandler);
        }

        if (this.uiBindings['non-sci-impairment-reason']) {
            this.uiBindings['non-sci-impairment-reason']
                .removeEventListener('change', this.nonSciImpairmentReasonChangeHandler);
        }

        if (this.uiBindings['non-sci-impairment-comments']) {
            this.uiBindings['non-sci-impairment-comments']
                .removeEventListener('change', this.nonSciImpairmentCommentsChangeHandler);
        }
    }

    public onDermatomeClick(e: MouseEvent): boolean {
        const target = e.target as HTMLElement;
        if (target.classList.contains('dermatomes')) {
            return true;
        }

        let dermatomeName;

        if (target.classList.contains('score')) {
            dermatomeName = target.getAttribute('bind-to')!.toUpperCase();
        } else if (target.classList.contains('name')) {
            dermatomeName = target.innerHTML.toUpperCase();
        } else if (target.classList.contains('dermatome')) {
            dermatomeName = target.firstElementChild!.innerHTML.toUpperCase();
        }

        const event: CustomEvent = new CustomEvent('dermatome-selected', { detail: { dermatome: dermatomeName } });
        this.dispatchEvent(event);

        return true;
    }

    public onPropagateValueChange(): boolean {
        if (!this.uiBindings['propagate-value']) {
            return true;
        }

        const event: CustomEvent =
            new CustomEvent(
                'propagate-value-changed',
                {
                    detail: {
                        propagateValue: this.uiBindings['propagate-value'].checked,
                    },
                },
            );

        this.dispatchEvent(event);

        return true;
    }

    public onScoreChange(): boolean {
        if (!this.uiBindings['dermatome-score']) {
            return true;
        }

        const event: CustomEvent =
            new CustomEvent(
                'dermatome-score-changed',
                {
                    detail: {
                        dermatome: this.getAttribute('dermatome'),
                        score: this.uiBindings['dermatome-score'].value,
                    },
                },
            );

        this.dispatchEvent(event);

        return true;
    }

    public onNonSciImpairmentReasonChange(): boolean {
        if (!this.uiBindings['non-sci-impairment-reason']) {
            return true;
        }

        const event: CustomEvent =
            new CustomEvent(
                'non-sci-impairment-reason-changed',
                {
                    detail: {
                        dermatome: this.getAttribute('dermatome'),
                        reason: this.uiBindings['non-sci-impairment-reason'].value,
                    },
                },
            );

        this.dispatchEvent(event);

        return true;
    }

    public onNonSciImpairmentCommentsChange(): boolean {
        if (!this.uiBindings['non-sci-impairment-comments']) {
            return true;
        }

        const event: CustomEvent =
            new CustomEvent(
                'non-sci-impairment-comments-changed',
                {
                    detail: {
                        comments: this.uiBindings['non-sci-impairment-comments'].value,
                        dermatome: this.getAttribute('dermatome'),
                    },
                },
            );

        this.dispatchEvent(event);

        return true;
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        if (name === 'dermatome') {
            this.selectDermatome(newValue);

            if (this.uiBindings.dermatome) {
                this.uiBindings.dermatome.innerHTML = newValue.toUpperCase();
            }

            // Force refresh of other input controls.
            // There are issues when the controls request an update but the dermatome changes right after.
            // Occurs when selecting the next dermatome after updating the current one.
            if (this.uiBindings['dermatome-score']) {
                const score: string | null = this.getAttribute('dermatome-score');
                this.uiBindings['dermatome-score'].value = score || '';
            }

            return;
        }

        if (name === 'dermatome-score') {
            if (this.uiBindings['dermatome-score']) {
                this.uiBindings['dermatome-score'].value = newValue;
            }

            return;
        }

        if (name === 'non-sci-impairment-reason') {
            if (this.uiBindings['non-sci-impairment-reason']) {
                this.uiBindings['non-sci-impairment-reason'].value = newValue;
            }

            return;
        }

        if (name === 'non-sci-impairment-comments') {
            if (this.uiBindings['non-sci-impairment-comments']) {
                this.uiBindings['non-sci-impairment-comments'].value = newValue;
            }

            return;
        }

        if (name === 'propagate-value') {
            if (this.uiBindings['propagate-value']) {
                this.uiBindings['propagate-value'].checked = newValue !== null;
            }

            this.onPropagateValueChange();

            return;
        }

        const element: HTMLElement = this.uiBindings[name] as HTMLElement;

        if (element) {
            element.innerHTML = newValue;
        }
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = document.createElement('template') as HTMLTemplateElement;
        template.innerHTML = RhiIsncsciUiMobileSensory.getTemplate();
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    private initializeDeclaredProperties(): void {
        const props: { [index: string]: { value: string | boolean | number } } = RhiIsncsciUiMobileSensory.properties;

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
            this.uiBindings[bindTo] = element;

            const property = RhiIsncsciUiMobileSensory.properties[bindTo];

            if (property && property.value) {
                if (property.useProperty) {
                    (element as any)[property.useProperty] = property.value;
                } else {
                    (element as HTMLElement).innerHTML = property.value.toString();
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

            if (dermatome.firstElementChild!.innerHTML === nameToUpper) {
                this.selectedDermatome = dermatome;
                dermatome.classList.add('selected');
            }

            index++;
        }
    }
}

customElements.define(RhiIsncsciUiMobileSensory.is, RhiIsncsciUiMobileSensory);
