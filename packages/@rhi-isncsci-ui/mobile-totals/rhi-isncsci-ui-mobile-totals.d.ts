import { TemplateResult } from '../../../node_modules/lit-html/lit-html.js';
export declare class RhiIsncsciUiMobileTotals extends HTMLElement {
    private static getOptionTemplate(label, value, selectedValue);
    private props;
    private commentsElement;
    private commentsClass;
    constructor();
    static readonly is: string;
    _render(props: any): TemplateResult;
    static readonly observedAttributes: string[];
    static readonly properties: {
        'ais': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'comments': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'complete-incomplete': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'dap': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-lower-motor': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-motor-nl': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-motor-nl-zpp': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-prick': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-sensory-nl': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-sensory-nl-zpp': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-touch': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'left-upper-motor': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'nli': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-lower-motor': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-motor-nl': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-motor-nl-zpp': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-prick': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-sensory-nl': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-sensory-nl-zpp': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-touch': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'right-upper-motor': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-ais': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-comments': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-complete-incomplete': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-dap': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-dap-description': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-left': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-light-touch': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-lower-motor': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-motor-nl': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-motor-nl-zpp': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-nli': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-option-no': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-option-nt': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-option-yes': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-pin-prick': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-right': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-sensory-nl': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-sensory-nl-zpp': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-upper-motor': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-vac': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'text-vac-description': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
        'vac': {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
    };
    ready(): void;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void;
    private requestRender();
    private handleCellClick(e, cellName);
    private handleCommentsChange(e);
    private handleDapChange(e);
    private handleVacChange(e);
}
