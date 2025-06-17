import React from "react";
import { IconLogo } from "../components/icons";
import ForgotPasswordContainer from "../components/forgotPassword/ForgotPasswordContainer";

function ForgotPassword() {
  return (
    <div className="flex flex-col items-center bg-blue-200 min-h-screen pt-16">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          <IconLogo className="h-6 w-6 text-yellow-500 mr-2" />
          <span className="text-yellow-500">Forgot Password</span>
        </h2>
        <ForgotPasswordContainer />
      </div>
    </div>
  );
}

export default ForgotPassword;
