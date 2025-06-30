import React from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "./Logosection";
import { House, ShoppingBag } from "lucide-react";

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Dashboard</div>
        </div>
        <Outlet/>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-300 min-h-full w-80 p-6 space-y-6">
          {/* Sidebar content here */}
          <NavLink to="/">
            <Logo/>
          </NavLink>
          <NavLink className="font-bold text-lg flex gap-2">
           <House />  Home
          </NavLink>
          <NavLink to="myParcels" className="font-bold text-lg flex gap-2">
            <ShoppingBag />my parcels
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
