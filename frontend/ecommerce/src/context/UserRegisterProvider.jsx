import { useEffect, useState } from "react";
import { UserRegisterContext } from "./UserRegisterContext";
import { Alert, Snackbar } from "@mui/material";

export const UserRegisterProvider = ({ children }) => {
  const [userRegister, setUserRegister] = useState({});
  const [error, setError] = useState(null);

  const handleRegister = async (user) => {
    try {
      const request = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const response = await request.json();
      console.log(response);
      setToken(data.token);
        setIsAuthenticated(true);
        setUserLogin(data.token);
        navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submitChange = (e) => {
    console.log("desde el provider", e);
    if (e.target && e.target.name && e.target.value !== "") {
      setUserRegister({
        ...userRegister,
        [e.target.name]: e.target.value,
      });
    } else {
      alert("llena los campos");
    }
  };
  

  useEffect(() => {
    handleRegister(userRegister);
  }, []);
  return (
    <UserRegisterContext.Provider value={{ submitChange }}>
      {children}
    </UserRegisterContext.Provider>
  );
};
