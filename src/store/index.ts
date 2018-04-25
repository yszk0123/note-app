/* tslint:disable no-var-requires */
export * from './queries/FirebaseModel';
export * from './queries/NoteModel';
export * from './queries/RootModel';
export * from './queries/UserModel';
export { reducer, saga } from './mutations';

let configureStore: any;

if (process.env.NODE_ENV !== 'production') {
  configureStore = require('./configureStore.dev').configureStore;
} else {
  configureStore = require('./configureStore.prod').configureStore;
}

export { configureStore };
