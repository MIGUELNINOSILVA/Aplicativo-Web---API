import React, { useContext, useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";
import './../styles/NavBar.css';
import { CarritoContext } from "../context/CarritoContext";

export const NavBar = () => {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary main-content fixed-navbar ${menuOpen ? 'open' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img className="img-home" src="src/assets/logo.svg" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/men" onClick={closeMenu}>
                Hombre
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/woman" onClick={closeMenu}>
                Mujer
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/child-boy" onClick={closeMenu}>
                Niño
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <Link className="nav-link active" aria-current="page" to="/child-girl" onClick={closeMenu}>
                Niña
              </Link>
            </li>
          </ul>
          <div className="ms-auto d-flex align-items-center justify-content-center">
            <Link className="btn btn-outline-success me-2 " to="/store-pay" onClick={closeMenu}>
              <Badge badgeContent={listaCompras.length} color="secondary">
                <LocalGroceryStoreIcon />
              </Badge>
            </Link>
            <Link className="btn" to="/user-information" onClick={closeMenu}>
              <Avatar>H</Avatar>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
