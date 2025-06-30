import React from "react";
import logoImg from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={logoImg} alt="SwiftParcel Logo" />
      <div className="text-3xl font-bold -ml-3">SwiftParcel</div>
    </div>
  );
};
export default Logo;