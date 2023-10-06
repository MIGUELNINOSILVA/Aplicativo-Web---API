import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/Main.css";
import { UserLoginProvider } from "./context/UserLoginProvider";
import { ProductProvider } from "./context/ProductProvider";
import { CarritoProvider } from "./context/CarritoProvider";
import { UserRegisterProvider } from "./context/UserRegisterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserRegisterProvider>
        <UserLoginProvider>
          <ProductProvider>
            <CarritoProvider>
              <App />{" "}
            </CarritoProvider>
          </ProductProvider>
        </UserLoginProvider>
      </UserRegisterProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>
);
