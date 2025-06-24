import React from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router";
const Logo = () => {
  return (
    <>
      <div className="flex items-end">
        <img className="mb-2" src={logoImg} alt="" />
        <div className="text-3xl font-bold -ml-3">SwiftParcel</div>
      </div>
    </>
  );
};

export default Logo;
