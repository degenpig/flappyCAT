import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import App from "./App";
import Wating from "./Waiting";
//open Redux DevTool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/play" element={<App />} />
        <Route path="/" element={<Wating />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
