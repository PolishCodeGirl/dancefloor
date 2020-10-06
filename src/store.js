import { createStore, compose } from "redux";
import canvasReducer from "./canvasReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(canvasReducer, composeEnhancers());

export const { dispatch, getState } = store;

export default store;
