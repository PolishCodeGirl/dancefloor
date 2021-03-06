import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles";

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
