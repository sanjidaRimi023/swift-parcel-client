import React from "react";
import Logo from "../Components/logo";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto footer flex flex-col footer-center bg-black text-white p-10 rounded-4xl">
        <div>
          <NavLink className="font-bold">
            <Logo />
          </NavLink>
          <p className="w-150">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <hr className="border border-dashed border-secondary w-full" />
        <nav>
          <div className="grid grid-flow-col gap-4">
            <NavLink>Coverage</NavLink>
            <NavLink>Service</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact Us</NavLink>
          </div>
        </nav>
        <hr className="border-1 border-dashed border-secondary w-full" />
        <nav>
          <div className="grid grid-flow-col gap-4">
            <span>Facebook</span>
            <span>github</span>
            <span>LInkedIn</span>
            <span>Twitter</span>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
