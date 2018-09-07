export declare class RhiIsncsciUiMobileTotalsDemo extends HTMLElement {
    static getTemplate(props: any): string;
    static readonly observedAttributes: string[];
    private props;
    constructor();
    static readonly is: string;
    static readonly properties: {
        'file-uri': {
            type: StringConstructor;
            value: string;
        };
    };
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void;
    private requestRender();
    private bindToEvents();
}
