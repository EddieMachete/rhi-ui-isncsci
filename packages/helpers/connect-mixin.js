/*
  Mixin for connecting an element to the Redux store; implements the
  basic store-connection boilerplate.
  Sample use:
  import { connect } from '../node_modules/pwa-helpers/connect-mixin.js';
  class MyElement extends connect(store)(HTMLElement) {
    // ...
    _stateChanged(state) {
      this.count = state.data.count;
    }
  }
*/
export const connect = (store) => (baseElement) => class extends baseElement {
    connectedCallback() {
        // Connect the element to the store.
        this.__storeUnsubscribe = store.subscribe(() => this.stateChanged(store.getState()));
        this.stateChanged(store.getState());
        if (super.connectedCallback) {
            super.connectedCallback();
        }
    }
    disconnectedCallback() {
        this.__storeUnsubscribe();
        if (super.disconnectedCallback) {
            super.disconnectedCallback();
        }
    }
    // This is called every time something is updated in the store.
    stateChanged(state) {
        throw new Error('stateChanged() not implemented');
    }
};
