import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import ToggleButtons from "../Components/ToggleButtons";
import useTheme from "../Hooks/useTheme";
import Logo from "../Components/Logosection";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const navItem = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coverage">Coverage</NavLink>
      <NavLink to="/send-parcel">Send Parcel</NavLink>
      {user && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </>
      )}
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/be-a-rider">Be a Rider</NavLink>
    </>
  );

  const hangleLogoutBtn = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {navItem}
              <ToggleButtons theme={theme} toggleTheme={toggleTheme} />
              {user ? (
                <button
                  onClick={hangleLogoutBtn}
                  className="block btn btn-primary"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn btn-primary">login</button>
                  </Link>

                 <Link to="/register">
                    <button className="btn btn-primary">register</button>
                  </Link>

                </>
              )}
            </ul>
          </div>
          <NavLink to="/" className="text-xl">
            <Logo />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5">{navItem}</ul>
        </div>
        <div className="hidden navbar-end lg:flex gap-2">
          <ToggleButtons theme={theme} toggleTheme={toggleTheme} />
          {user ? (
            <button onClick={hangleLogoutBtn} className="block btn btn-primary">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                    <button className="btn btn-primary">login</button>
                  </Link>

                 <Link to="/register">
                    <button className="btn btn-primary">register</button>
                  </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
