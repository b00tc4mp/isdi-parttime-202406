// AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAlert } from "./context/AlertContext";

import Alert from "./components/Alert";
import HeaderContainer from "./components/header/HeaderContainer";
import { Footer } from "./components";
import {
  Home,
  SignIn,
  Register,
  MyProfile,
  FlightResults,
  MyFavouriteRoutes,
  ForgotPassword
} from "./pages";

function AppRoutes() {
  const { showAlert } = useAlert();
  console.log("🔧 AppRoutes render");

  return (
    <div className="flex flex-col min-h-screen">
      <Alert />
      <HeaderContainer />
      <div className="flex-grow pt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/MyFavouriteRoutes" element={<MyFavouriteRoutes />} />
          <Route path="/FlightResults" element={<FlightResults />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default AppRoutes;
