import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/Main.css";
import { UserLoginProvider } from "./context/UserLoginProvider";
import { ProductProvider } from "./context/ProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserLoginProvider>
        <ProductProvider>
          <App />{" "}
        </ProductProvider>
      </UserLoginProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>
);
