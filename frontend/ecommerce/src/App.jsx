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
import { useContext } from "react";
import { UserContext } from "./context/UserLoginContext";
import { ProtectedRoute } from "./utils/ProtectedRoute";

export const App = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <>
      <ProductProvider>
        {isAuthenticated && <NavBar /> }
        <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainContent />
            ) : (
              <Navigate to="/sign-in" replace /> 
            )
          }
        />
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/" />}>
            <Route path="/" element={<MainContent />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/men" />}>
            <Route path="/men" element={<HombrePage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/woman" />}>
            <Route path="/woman" element={<MujerPage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/child-boy" />}>
            <Route path="/child-boy" element={<NinoPage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/child-girl" />}>
            <Route path="/child-girl" element={<NinaPage />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/user-information" />}>
            <Route path="/user-information" element={<User />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={isAuthenticated} redirectPath="/store-pay" />}>
            <Route path="/store-pay" element={<StorePage />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

        </Routes>
      </ProductProvider>
    </>
  );
};
