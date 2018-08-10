import { LitElement } from '@polymer/lit-element/lit-element.js';
import { TemplateResult } from 'lit-html/lit-html.js';
export declare class RhiIsncsciUiMobileTotals extends LitElement {
    static readonly is: string;
    _render(props: any): TemplateResult;
    private commentsElement;
    private commentsClass;
    comments: string;
    static readonly properties: any;
    constructor();
    ready(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void;
    private handleCellClick;
    private handleCommentsChange;
    private handleDapChange;
    private handleVacChange;
}
