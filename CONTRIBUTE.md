### Development tools
* TypeScript
* polymer-cli

This guide has the steps to create custom elements by writting the source code in TypeScript,
to later be exported as Ecma Script 6 modules,
using Google Polymer.

### Before creating an element
`npm install -g typescript`
`npm install -g polymer-cli`

### Steps to create a new element
create project folder
create a src folder, which will have our typescript code
create a packages folder, where we will export our es6 code
inside packages, create the element folder, eg. my-element
navigate to packages/my-element and run `polymer init`
Select the option *A simple Polymer 3 element*




## Typography



                /*
                PRIMARY TEXT
                color: var(--isncsci-primary-text-color, #000);
                font-size: var(--isncsci-primary-text-font-size, 16px);
                font-weight: var(--isncsci-primary-text-font-weight, 400);
                line-height: var(--isncsci-primary-text-line-height, 24px);

                SECONDARY TEXT
                color: var(--isncsci-secondary-text-color, #666);
                font-size: var(--isncsci-primary-text-font-size, 16px);
                font-weight: var(--isncsci-primary-text-font-weight, 400);
                line-height: var(--isncsci-primary-text-line-height, 24px);

                ON SECONDARY TEXT
                color: var(--isncsci-on-secondary-color, #333);
                font-size: var(--isncsci-primary-text-font-size, 16px);
                font-weight: var(--isncsci-primary-text-font-weight, 400);
                line-height: var(--isncsci-primary-text-line-height, 24px);
                
                ON SECONDARY HIGHLIGHT TEXT
                color: var(--isncsci-on-secondary-highlight, #FFF);
                font-size: var(--isncsci-primary-text-font-size, 16px);
                font-weight: var(--isncsci-primary-text-font-weight, 400);
                line-height: var(--isncsci-primary-text-line-height, 24px);
                */


html {
    --isncsci-app-status-bar-color: #757575;
    --isncsci-on-app-status-bar: #FFF;

    --isncsci-primary-color: #FAFAFA;
    --isncsci-on-primary-color: #666;
    --isncsci-on-primary-highlight: #000;

    --isncsci-secondary-color: #999;
    --isncsci-on-secondary-color: #333;
    --isncsci-on-secondary-highlight: #FFF;

    --isncsci-secondary-color-accent: #858585;
    --isncsci-accent-overlay: rgba(51, 51, 51, .2);
    --isncsci-divider-color: rgba(0, 0, 0, .1);

    --isncsci-primary-text-color: #000;
    --isncsci-secondary-text-color: #666;

    --isncsci-primary-background-color: #FFF;

    --isncsci-switch-button-track: #BBB;
    --isncsci-cell-color: #F2F2F2;
    --isncsci-interactive-cell-color: #DCDCDC;

    --isncsci-font-common-base: {
        font-family: 'Roboto', 'Noto', 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
    };

    --isncsci-primary-text: {
        @apply(--isncsci-font-common-base);
        color: var(--isncsci-primary-text-color);
        font-family:;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    };

    --isncsci-secondary-text: {
        @apply(--isncsci-primary-text);
        color: var(--isncsci-secondary-text-color);
    };

    --isncsci-on-secondary-text: {
        @apply(--isncsci-primary-text);
        color: var(--isncsci-on-secondary-color);
    };

    --isncsci-on-secondary-highlight-text: {
        @apply(--isncsci-primary-text);
        color: var(--isncsci-on-secondary-highlight);
    };
}