import React, { useState } from "react";
import { CardComponent } from "../components/CardComponent";
import "./../styles/HombrePage.css";

export const HombrePage = () => {
  return (
    <div className="container main-content">
      <div className="text-efect">FOR MEN</div>

      <div className="container mt-5 d-flex flex-wrap gap-5 justify-content-center">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

    </div>
  );
};
