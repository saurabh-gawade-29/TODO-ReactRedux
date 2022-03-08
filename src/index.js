import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Need to import provider to make a connection
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* Decalre provider here and pass store as prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
