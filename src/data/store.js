import { createStore, compose } from "redux";
import reducer from './reducer';
import persistState from "redux-localstorage";
import initial from './initial';

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
reducer,
initial,
composeEnhancers(persistState())
);

export default store;