import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HombrePage } from "./Pages/HombrePage";
import { MujerPage } from "./Pages/MujerPage";
import { NinoPage } from "./Pages/NinoPage";
import { NinaPage } from "./Pages/NinaPage";
import { MainContent } from "./Pages/MainContent";
import { StorePage } from "./Pages/StorePage";

import "./styles/App.css";
import { User } from "./Pages/User";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { ProductProvider } from "./context/ProductProvider";
import { UserLoginProvider } from "./context/UserLoginProvider";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserLoginContext";
import { ProtectedRoute } from "./utils/ProtectedRoute";

export const App = () => {
  const { isAuthenticated, userLogin } = useContext(UserContext);
  const {  getUser } = useContext(UserContext);
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

  return (
    <>
      <ProductProvider>
        {userLogin && <NavBar /> }
        <Routes>
        <Route
          path={"/" || "/men" || "/woman" || "/child-boy" || "/child-girl" || "/user-information" || "/store-pay"}
          element={
            userLogin ? (
              <MainContent />
            ) : (
              <Navigate to="/sign-in" replace /> 
            )
          }
        />
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/" />}>
            <Route path="/" element={<MainContent />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/men" />}>
            <Route path="/men" element={<HombrePage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/woman" />}>
            <Route path="/woman" element={<MujerPage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/child-boy" />}>
            <Route path="/child-boy" element={<NinoPage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/child-girl" />}>
            <Route path="/child-girl" element={<NinaPage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/user-information" />}>
            <Route path="/user-information" element={<User dataUser={userData} />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={userLogin} redirectPath="/store-pay" />}>
            <Route path="/store-pay" element={<StorePage />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

        </Routes>
      </ProductProvider>
    </>
  );
};
