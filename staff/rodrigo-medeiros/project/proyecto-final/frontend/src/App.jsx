import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Register } from "./pages";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-20"> {/* Adding top padding to compensate for the fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </div>
      <Footer className="mt-auto" />
      <ToastContainer /> {/* Add the ToastContainer here */}
    </div>
  );
}

export default App;
