> :warning: These components are still a work in progress. :warning:
# @rhi-isncsci-ui web components

## Introduction
*rhi-ui-isncsci* contains reusable user interface [web components](https://www.webcomponents.org/introduction) for the ISNCSCI project.
We are currently using [Google Polymer](https://www.polymer-project.org/) for our syntactic sugar.

## Why do I (EE) make you suffer with this?
It has been my experience, after many years in the industry, that when it comes to the UI we let whatever framework we are using for an app dictate how the interface code will be written.
As engineers we are always trying to build modular, reusable code but that has been a very challenging thing to achieve on the UI.
JQuery and Atomic design got us close but not there yet.  AngularJS moved us backwards in that respect.
The recent [Custom Elements Specification](https://w3c.github.io/webcomponents/spec/custom/) is finally moving us into the future and allows us to build well engineered components that can be reused, no matter what architecture is being followed.
If it runs on the web platform, it will work.
By following *Clean Architecture* approaches and *web components* standards we can finally live up to our loftiest engineering goals.

## Getting Started
### Setup the project
Get the project and change directory into the project folder.
```
git clone https://github.com/rhi-isncsci/ui.git
cd ui
```

Install dependencies.
```
npm i
```

Build the project
```
npm run build
```

### View Demo
Start local server to view the demo
```
npm start
```
This should automatically open a browser at http://127.0.0.1:8081/ for showing the demo.

### Serve project for development
For development run the following command in the terminal.
This command will start the local server, build the project, watch for changes in the source code and re-build the project when there are changes.
```
npm run serve
```

This project have been setup for development using Visual Studio Code with `Debugger for Chrome` extension.
1. Open the debug tab is VS Code
2. Click the green arrow button
3. Add breakpoints and interact with the newly launched browser window

## Code
Each folder in the `src` folder represents a web component.
Each web component folder has its own code files, `package.json`, and a `README.md` files specific to each web component.
The information in `package.json` in the web component folder will contain description of the web component that is unique to the its web component.
The common description about the web components will go in the `package.json` in the `root` of the project folder.

## Contribute
When working on this project, follow these steps:
1. Make sure you are working on a branch associated to a user story.
2. Add unit tests when appropriate.
3. When you are done building your component, add a demo page for it.
4. Review your changes and commit your code.
