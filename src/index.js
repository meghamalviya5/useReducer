import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductContext, ProductProvider } from "./context/ProductContext";

export { ProductContext };

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>,
  rootElement
);
