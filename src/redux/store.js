import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import reduxPromise from "redux-promise";

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxPromise))
);
