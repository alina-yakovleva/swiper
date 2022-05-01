import React from "react";
import ReactDOM from "react-dom/client";

import { PageProvider } from "./hooks/usePage";
import App from "./App";

import "./assets/styles/fonts.css";
import "./assets/styles/common.css";
import "./assets/styles/icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PageProvider>
    <App />
  </PageProvider>
);
