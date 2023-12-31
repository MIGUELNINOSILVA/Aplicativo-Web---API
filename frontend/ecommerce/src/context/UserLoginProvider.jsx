import { Alert, Snackbar } from "@mui/material";
import { UserContext } from "./UserLoginContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

export const UserLoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [userToken, setUserToken] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useLocalStorage('user-token', "");
  
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
        setError("Error al iniciar sesión"); // Establece un mensaje de error genérico
      } else {
        const data = await response.json();
        setToken(data.token);
        setIsAuthenticated(true);
        setUserLogin(data.token);
        navigate("/");
      }
    } catch (error) {
      setError("Error al iniciar sesión"); // Establece un mensaje de error genérico
    }
  };

  const getUser = async (tokenGenerateLocal) => {
    const user = await fetch("http://localhost:4000/api/users/user-data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": tokenGenerateLocal,
        },
      });
      const userDataresponse = await user.json();
      setUserData(userDataresponse);
      return userDataresponse;
  }

  const editUser = async (tokenGenerateLocal, userData) => {
    try {
      const response = await fetch("http://localhost:4000/api/users/edit-user/find-and-update-user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": tokenGenerateLocal,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        setError("Error al editar usuario.");
      } else {
        setError("Usuario editado correctamente.");
        await getUser(tokenGenerateLocal);  
        window.location.reload();
      }

    } catch (error) {
       setError("Error al editar usuario.");
    }
  }

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
    setError(null); // Limpia el error después de cerrar el Snackbar
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

  useEffect(() => {
    // Verifica si el usuario está autenticado
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [token]);
  
  const signOut = () => {
    setToken("");
    setIsAuthenticated(false);
    setUserLogin("");
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ token, addUser, isAuthenticated, signOut, userLogin, userData, getUser, editUser,setUserToken, userToken }}>
      {children}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </UserContext.Provider>
  );
};
