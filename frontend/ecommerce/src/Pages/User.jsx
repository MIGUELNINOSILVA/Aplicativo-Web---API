import { Button, FormHelperText, Input, InputLabel } from "@mui/material";
import "./../styles/User.css";
import FormControl from "@mui/material/FormControl";
import { UserContext } from "../context/UserLoginContext";
import { useContext, useEffect, useState } from "react";

export const User = () => {
  const { signOut, getUser } = useContext(UserContext);
  const token = localStorage.getItem("user-token");
  const tokenObject = JSON.parse(token);
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  
  const fetchData = async () => {
    const userResponse = await getUser(tokenObject);
    setUserData(userResponse.user)
  };

  useEffect(() => {
    if (tokenObject) {
      fetchData();
    }
  }, [tokenObject]);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut();
  }
  return (
    <div className="container main-content">
      <div className="user-main-card">
        <div className="user-logo d-flex justify-content-center ">
          <img src="src/assets/logo.png" alt="" />
        </div>
        <div className="user-form d-flex justify-content-center p-5">
          <form className="container">
            <div className="form-group col-auto">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ingrese Nombre"
                value={userData.nombre || ""}
                onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="form-control"
                placeholder="Ingrese Apellido"
                value={userData.apellido || ""}
                onChange={(e) => setUserData({ ...userData, apellido: e.target.value })}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Ingrese Apellido"
                value={userData.email || ""}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Ingrese Contraseña"
                value={userData.password || ""}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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
