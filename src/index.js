import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { ThroughProvider } from "react-through";
import thunk from "redux-thunk";
import myReducer from "./reducers";
import "./App.css";
import "./Index.css";

const store = createStore(myReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <ThroughProvider>
      <App />
    </ThroughProvider>
  </Provider>,
  document.getElementById("root")
);
export default store;
