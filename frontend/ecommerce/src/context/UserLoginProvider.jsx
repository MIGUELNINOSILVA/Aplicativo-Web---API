import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { UserContext } from "./UserLoginContext";

import React, { useEffect, useState } from "react";

export const UserLoginProvider = ({ children }) => {
  const [error, setError] = useState('');

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const signInApi = async (email, password) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Manejo de errores si la solicitud no es exitosa
        throw new Error("Error al iniciar sesión");
      }

      const data = await response.json();
      setToken(data.token);
    } catch (error) {
      console.error(error);
      error.message = "Error al iniciar sesión" ? setError(error.message) : false;
    }
  };

  const addUser = (email, password) => {
    setUser({
      email: email,
      password: password,
    });
    signInApi(email, password);
  };

  const [loading, setLoading] = useState(true);


  // Material UI
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Abre el Snackbar cuando hay un error
    if (error) {
      handleClick();
      // Cierra el Snackbar después de 2 segundos (2000 milisegundos)
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  }, [error]);
  
  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </UserContext.Provider>
  );
};
