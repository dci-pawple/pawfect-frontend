import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Container from "./context/Container";

ReactDOM.render(
  // <React.StrictMode>
    <Container>
      <App />
    </Container>
  // </React.StrictMode>
  ,
  document.querySelector("#root")
);
