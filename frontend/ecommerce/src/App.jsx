import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HombrePage } from "./Pages/HombrePage";
import { MujerPage } from "./Pages/MujerPage";
import { NinoPage } from "./Pages/NinoPage";
import { NinaPage } from "./Pages/NinaPage";
import { MainContent } from "./Pages/MainContent";
import { StorePage } from "./Pages/StorePage";

import "./styles/App.css";
import { User } from "./Pages/User";
import {SignUp} from "./components/SignUp";
import {SignIn} from "./components/SignIn";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<MainContent />} />
        <Route path="/men" element={<HombrePage />} />
        <Route path="/woman" element={<MujerPage />} />
        <Route path="/child-boy" element={<NinoPage />} />
        <Route path="/child-girl" element={<NinaPage />} />
        <Route path="/store-pay" element={<StorePage />} />
        <Route path="/user-information" element={<User />} />
      </Routes>
    </>
  );
};
