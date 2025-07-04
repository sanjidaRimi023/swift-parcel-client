import React from "react";

import { NavLink, Outlet } from "react-router";
import Logo from "./Logosection";
import {
  Home,
  PackageSearch,
  ShoppingBag,
  History,
  MapPinned,
  User,
} from "lucide-react";

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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

        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-300 min-h-full w-80 p-6 space-y-2">
          <li>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              end
              className="font-bold text-md flex gap-2 items-center"
            >
              <Home className="w-5 h-5" /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/my-parcels"
              className="font-bold text-md flex gap-2 items-center"
            >
              <ShoppingBag className="w-5 h-5" /> My Parcels
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/payment-history"
              className="font-bold text-md flex gap-2 items-center"
            >
              <History className="w-5 h-5" /> Payment History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/track"
              className="font-bold text-md flex gap-2 items-center"
            >
              <MapPinned className="w-5 h-5" /> Tracking Parcels
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile"
              className="font-bold text-md flex gap-2 items-center"
            >
              <User className="w-5 h-5" /> Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
