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