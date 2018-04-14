/* tslint:disable no-var-requires */

let configureStore: any;

if (process.env.NODE_ENV !== 'production') {
  configureStore = require('./configureStore.dev').configureStore;
} else {
  configureStore = require('./configureStore.prod').configureStore;
}

export { configureStore };
