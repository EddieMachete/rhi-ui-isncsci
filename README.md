Because Polymer 3.0-preview only works in ES6.
It is hard to get the components setup and work in various environment.

It is also hard to realize what the Polymer is doing under the hood.

This is a good way to learn about how the web components work.

## Demo
For running on web browser just run:
```
$ polymer serve
```

You can also package the app using webpack:
First install dependencies:
```
$ npm install
```
Then run webpack:
```
$ npm run webpack
```
Bundle will be found in ```/dist``` folder.

## Custom Elements
Most Elements has...
#### Properties
- template: TemplateResult that shapes the contents
#### Methods
- ```constructor```:
  - Attach shadow root
  - render/update template
  - addEventListeners
  - init props
- ```_addEventListeners```: sets all of the event listeners
- ```update```: when called it handles updating the props and re-rendering the template

---
### ```<rhi-isncsci-app>```
The Container for entire app. Contains the isncsci grid, diagram, totals and buttons for user interaction.
#### Children Elements
- ```<rhi-propagate-button>```
- ```<rhi-paint-button>```
- ```<rhi-isncsci-grid>```
- ```<rhi-isncsci-diagram>```
- ```<rhi-isncsci-totals>```
- ```<rhi-isncsci-test-totals>```

#### Properties
- ```isncsciExam```: Object that defines all of the properties of the form data
- ```isncsciTotals```: Object that defines the calculated of ```isncsciExam```
- ```propagateDirection```: current setting for propagating the input
- ```painting```: current setting for painting the input
#### Methods
- ```sampleData()```:
  - sets _isncsciExam with random sample
  - dispatches a custom event ```"update-isncsci-exam"```
- ```_updateIsncsciExamLevel```: updates specified level of ```isncsciExam```. Used for iteration for propagating input in ```_updateIsncsciExam``` and ```_paint```
### Event Handlers
- ```_updateIsncsciExam```: updates the current ```isncsciExam``` based on current setting of app and user's input
- ```_updatePropagateDirection```
- ```_updatePainting```
- ```_paint```

---
### ```<rhi-isncsci-grid>```
Holds the rows and additional inputs to input the ISNCSCI exam.
#### Children Elements
- ```<rhi-isncsci-grid-row>```
- ```<rhi-isncsci-grid-cell>```
#### Properties
- ```isncsciExam```: Object that defines all of the properties of the form data
  - When ```Set```, it dispatches a ```"update-isncsci-exam"``` event to itself (```<rhi-isncsci-grid>```)
#### Methods
- updateLevels():
  - Sets the ```isncsciExamLevel``` property for each ```<rhi-isncsci-grid-row>``` elements
- ```_getBinaryLabel()```: returns a label for binary options. Used for setting the ```label``` attribute in ```<rhi-isncsci-grid-cell>```

---
### ```<rhi-isncsci-grid-row>```
Holds the cells for each row.
#### Children Elements
- ```<rhi-isncsci-grid-cell>```
#### Properties
- ```isncsciExamLevel```: holds the information on level
  - When ```Set```, it dispatches ```update-isncsci-exam-level``` event to itself

---
### ```<rhi-isncsci-grid-cell>```
Displays the selected value and allows users to change the input.
#### Children Elements
- ```<rhi-isncsci-grid-cell-dropdown>```
#### Properties
- ```value```
- ```label``` (Optional)
- ```levelName``` (Optional)
- ```side```: side a body
- ```type```: type determines options for input
#### Methods
- ```observedAttributes()```
- ```attributeChangedCallback(attrName, oldVal, newVal)```
- ```_initAttributesToProperties()```: initialize all of the attributes to properties
- ```_openDropdown()```: show a possible options for changing the value of the cell
- ```_paintStart()```: sets the global variable for painting
- ```_paint(e)```: dispatches ```paint-cell-value``` event that bubbles with levelName, side, type
- ```_paintEnd()```: resets the global variable for painting

---
### ```<rhi-isncsci-grid-cell-dropdown>```
Displays the dropdown with options with current selected value.
#### Properties
- ```selected```
- ```opened```
- ```value```
- ```label``` (Optional)
- ```levelName``` (Optional)
- ```side```: side a body
- ```type```: type determines options for input
#### Methods
- ```observedAttributes()```
- ```attributeChangedCallback(attrName, oldVal, newVal)```
- ```open(selectedValue)```: displays the dropdown with selected value
- ```_updateButtons```: updates the event handler (```_onChange```) for each options in dropdown
- ```_onChange(selection)```: handle user's selection and fires ```update-cell-value``` event that bubbles

---
### ```<rhi-isncsci-diagram>```
Displays the diagram based on ```isncsciExam```
#### Properties
- ```isncsciExam```
#### Methods
- ```_classify(value)```: returns class name based on selected value. Used in template for setting the class name for coloring the body parts.

---
### ```<rhi-isncsci-totals>```
Displays the calculated total of the ISNCSCI exam.
#### Properties
- ```isncsciTotals```:
  - ```set```: uses the methods defined in the ```IsncsciTotals``` object to define certain properties. This was done to match the properties found in test exams/totals

---
### ```<rhi-isncsci-test-totals>``` (extends ```<rhi-isncsci-totals>```)
Displays the test total of the ISNCSCI exam for viewing the mismatches in the test results and calculated results.
#### Properties
- ```isncsciTestTotals```
#### Method
- ```checkTotals()```: checks for mismatches between ```isncsciTotals``` and ```isncsciTestTotals``` dispatches ```update-isncsci-test-totals``` event for re-rendering



---
## Patterns
- ```Setters```:
  - handles logic for setting the property of the element
  - ends with dispatching a event for letting the element know the property may have changed


## Problems/Notes
- current implementation of this web component is very specific to this app. The components found in ```<rhi-isncsci-grid>``` seems like something that can be used in other applications. But to handle the logic for interaction, the props/attrs were hard coded for indicators for firing events. To generalize the web component for other applications, the hard coded props/attrs such as ```levelName```,```side``` have compressed in to a single object. But this makes it harder for other developers because this means if the this object need to be well designed and handled.
- to create custom event that bubbles from a shadow-root you must set ```bubbles: true``` AND ```composed: true```
- ```this.getAttribute('value')``` in ```<rhi-isncsci-grid-cell>``` is returning string value ```"undefined"``` sometimes. It seems to happen when rendering the initial components and the attribute is ```null```.
- ontouchmove event only gets fired from and element where the touch started
- setting up the logic for attribute and properties of web component can get complicated and confusing very fast