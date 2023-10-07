import React, { useContext, useState } from "react";
import { Button, Input } from "@mui/material";
import { UserContext } from "../context/UserLoginContext";

export const User = ({ dataUser }) => {
  const { signOut, editUser, userToken } = useContext(UserContext);
  const [userData, setUserData] = useState(dataUser || {});

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut();
  };

  const handleEditUser = (event) => {
    event.preventDefault();
    
    const dataUser = {
      nombre: userData.nombre,
      apellido: userData.apellido,
      email: userData.email,
      password: userData.password,
    }
    editUser(userToken, userData);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container main-content">
      <div className="user-main-card">
        <div className="user-logo d-flex justify-content-center ">
          <img src="src/assets/logo.svg" alt="" style={{width: '15rem'}} />
        </div>
        <div className="user-form d-flex justify-content-center p-5">
          <form className="container" onSubmit={handleEditUser}>
            <div className="form-group col-auto">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="form-control"
                placeholder="Ingrese Nombre"
                value={userData.nombre || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                className="form-control"
                placeholder="Ingrese Apellido"
                value={userData.apellido || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Ingrese Email"
                value={userData.email || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Ingrese Contraseña"
                value={userData.password || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="buttons-effects d-flex gap-2 justify-content-end mt-3">
              <Button variant="contained" color="primary" type="submit">
                Editar
              </Button>
              <Button variant="contained" color="error" onClick={handleSignOut}>
                Log out
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
