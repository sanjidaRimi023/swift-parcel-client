import React from "react";
import { NavLink } from "react-router";
import ToggleButtons from "../Components/ToggleButtons";
import useTheme from "../Hooks/useTheme";
import Logo from "../Components/Logosection";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navItem = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/about-use">About Us</NavLink>
      <NavLink to="/be-a-rider">Be a Rider</NavLink>
    </>
  );
  return (
    <>
      <div className="navbar shadow-sm rounded-xl bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {navItem}
              <ToggleButtons theme={theme} toggleTheme={toggleTheme} />
              <NavLink className="btn btn-primary w-30">Sign In</NavLink>
              <NavLink className="btn btn-primary w-30">Be a Rider</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            <Logo />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5">{navItem}</ul>
        </div>
        <div className="hidden navbar-end lg:flex gap-2">
          <ToggleButtons theme={theme} toggleTheme={toggleTheme} />
          <NavLink className="btn btn-primary">Sign In</NavLink>
          <NavLink className="btn btn-primary">Be a Rider</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
