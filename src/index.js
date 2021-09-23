import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import reducer from "./Store/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
