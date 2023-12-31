import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import rootReducer from "./Reducer/rootReducer";
import App from "./components/App";
import "./index.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
