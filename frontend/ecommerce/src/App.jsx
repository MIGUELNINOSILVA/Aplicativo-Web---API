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
import { ProductsContext } from "./context/ProductContext";
import { ProductProvider } from "./context/ProductProvider";
import { UserLoginProvider } from "./context/UserLoginProvider";

const isAuthenticated = () => {
  return false;
};

export const App = () => {
  return (
    <>
      <UserLoginProvider>
        <ProductProvider>
          <Routes>
            {!isAuthenticated() && null}
            {isAuthenticated() ? (
              <>
                <Route
                  path="/"
                  element={
                    <>
                      <NavBar />
                      <MainContent />
                    </>
                  }
                />
                <Route path="/men" element={<HombrePage />} />
                <Route path="/woman" element={<MujerPage />} />
                <Route path="/child-boy" element={<NinoPage />} />
                <Route path="/child-girl" element={<NinaPage />} />
                <Route path="/store-pay" element={<StorePage />} />
                <Route path="/user-information" element={<User />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/sign-in"></Navigate>} />
            )}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </ProductProvider>
      </UserLoginProvider>
    </>
  );
};
