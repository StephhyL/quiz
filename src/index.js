import React from "react";
import ReactDOM from "react-dom";

// import from other components
import App from "./App";

// import styling
import "../src/stylesheets/css/reset.css";
import "../src/stylesheets/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
