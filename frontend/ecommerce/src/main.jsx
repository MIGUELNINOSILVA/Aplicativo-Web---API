import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/Main.css";
import { UserLoginProvider } from "./context/UserLoginProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserLoginProvider>
        <App />{" "}
      </UserLoginProvider>
    </React.StrictMode>
    ,
  </BrowserRouter>
);
