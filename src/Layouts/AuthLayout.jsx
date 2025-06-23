import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import Logo from "../Components/Logosection";

const AuthLayout = () => {
  return (
    <>
      <div data-theme="light" className="bg-base-200 p-8">
        <Logo />
        <div className="container mx-auto hero-content flex-col lg:flex-row-reverse p-20">
          <div className="flex-1">
            <img src={authImage} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
