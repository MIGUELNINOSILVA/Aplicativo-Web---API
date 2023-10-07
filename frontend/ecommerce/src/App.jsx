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
import { ProductsContext } from "./context/ProductContext";

export const App = () => {
  const { isAuthenticated, userLogin, setUserToken } = useContext(UserContext);
  const { getUser } = useContext(UserContext);
  const { productMan, getProductsMan, productWoman, getProductsWoman, getProductsBoy, productBoy,getProductsGirl, productGirl } =
    useContext(ProductsContext);
  const token = localStorage.getItem("user-token");
  const tokenObject = JSON.parse(token);
  setUserToken(tokenObject);
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  const fetchData = async () => {
    const userResponse = await getUser(tokenObject);
    setUserData(userResponse.user);
    await getProductsMan(tokenObject);
    await getProductsWoman(tokenObject);
    await getProductsBoy(tokenObject);
    await getProductsGirl(tokenObject);
  };

  useEffect(() => {
    if (tokenObject) {
      fetchData();
    }
  }, [tokenObject]);

  return (
    <>
      {userLogin && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={
            userLogin ? <MainContent /> : <Navigate to="/sign-in" replace />
          }
        />
        <Route
          element={<ProtectedRoute canActivate={userLogin} redirectPath="/" />}
        >
          <Route path="/" element={<MainContent />} />
        </Route>
        <Route
          element={
            <ProtectedRoute canActivate={userLogin} redirectPath="/men" />
          }
        >
          <Route
            path="/men"
            element={<HombrePage menProducts={productMan} />}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute canActivate={userLogin} redirectPath="/woman" />
          }
        >
          <Route
            path="/woman"
            element={<MujerPage womanProducts={productWoman} />}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute canActivate={userLogin} redirectPath="/child-boy" />
          }
        >
          <Route path="/child-boy" element={<NinoPage productBoy={productBoy} />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              canActivate={userLogin}
              redirectPath="/child-girl"
            />
          }
        >
          <Route path="/child-girl" element={<NinaPage productGirl={productGirl} />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              canActivate={userLogin}
              redirectPath="/user-information"
            />
          }
        >
          <Route
            path="/user-information"
            element={<User dataUser={userData} />}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute canActivate={userLogin} redirectPath="/store-pay" />
          }
        >
          <Route path="/store-pay" element={<StorePage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};
