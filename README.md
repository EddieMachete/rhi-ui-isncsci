# ISNCSCI with Polymer 3.0-preview and typescript code

This app is using Polymer 3.0-preview version.
It may break or stop working in the future.

This app also takes advantage of the algorithm written in typescript so that the app can work without calling an api.

## Starting application
1. Install dependencies
```
npm install
```

2. Start application
```
polymer serve
```

## Problems
- Two-way binding does not work very smoothly for complex data type (array, object). To update values for complex data types we need to use something like ```this.notifyPath()``` for each properties.