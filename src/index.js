import React from "react";
import ReactDOM from "react-dom/client";
import "./global-styles/normalize.css";
import "./global-styles/general.css";
import "./global-styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
