import React from "react";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./components/App";

import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
