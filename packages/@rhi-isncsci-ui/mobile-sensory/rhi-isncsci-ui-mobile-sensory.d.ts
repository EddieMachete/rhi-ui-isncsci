import { TemplateResult } from '../../../node_modules/lit-html/lit-html.js';
export declare class RhiIsncsciUiMobileSensory extends HTMLElement {
    static readonly is: string;
    readonly template: (props: any) => TemplateResult;
    static readonly properties: {
        ais: {
            reflectToAttribute: boolean;
            type: StringConstructor;
            value: string;
        };
    };
    private commentsClass;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
}
