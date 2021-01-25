import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";

import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line @typescript-eslint/no-redeclare
const App1: any = App;
ReactDOM.render(
  <React.StrictMode>{<App1 />}</React.StrictMode>,
  document.getElementById("root")
);
