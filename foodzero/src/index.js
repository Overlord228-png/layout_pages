import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ScrollToTop from "./components/scrollToTop";
import "./sass/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/foodzero">
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);