import React, { useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";
import './../styles/NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary main-content fixed-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="img-home" src="src/assets/logo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/men">
                Hombre
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/woman">
                Mujer
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/child-boy"
              >
                Niño
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/child-girl"
              >
                Niña
              </Link>
            </li>
          </ul>
          <div className="ms-auto d-flex align-items-center justify-content-center">
            <Link className="btn btn-outline-success me-2 " to="/store-pay">
              <Badge badgeContent={4} color="secondary">
                <LocalGroceryStoreIcon />
              </Badge>
            </Link>
            <Link className="btn" to="/user-information">
              <Avatar>H</Avatar>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
