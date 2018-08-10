export declare const connect: (store: any) => (baseElement: any) => {
    new (): {
        [x: string]: any;
        connectedCallback(): void;
        disconnectedCallback(): void;
        stateChanged(state: any): void;
    };
    [x: string]: any;
};
