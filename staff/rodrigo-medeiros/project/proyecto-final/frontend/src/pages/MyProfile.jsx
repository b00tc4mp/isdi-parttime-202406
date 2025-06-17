// src/pages/MyProfile.jsx
import React from "react";
import { IconLogo } from "../components/icons";
import MyProfileContainer from "../components/myProfile/MyProfileContainer";

const MyProfile = () => {
  return (
    <div className="flex flex-col items-center bg-blue-200 min-h-screen pt-16">
      <div className="w-full max-w-sm">
        <MyProfileContainer />
      </div>
    </div>
  );
};

export default MyProfile;
