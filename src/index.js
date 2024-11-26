import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure the correct file path to App.js
import { GlobalStyles } from "./global-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
