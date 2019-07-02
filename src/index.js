import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Category from "./category";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
