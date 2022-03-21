import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

reportWebVitals();
