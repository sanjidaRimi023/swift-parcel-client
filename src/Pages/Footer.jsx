import React from "react";
import Logo from "../Components/Logosection";
import { Link, NavLink } from "react-router"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-10 md:px-10 lg:px-20 rounded-4xl">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 items-center">
        
        <div className="text-center md:text-left flex flex-col items-center">
          <Link to="/" className="inline-block font-bold">
            <Logo />
          </Link>
          <p className="mt-4 text-sm md:text-base max-w-xl mx-auto md:mx-0">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <hr className="border border-dashed border-secondary w-full" />

        {/* Navigation Links */}
        <nav className="text-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base">
            <NavLink to="/coverage">Coverage</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </nav>

        <hr className="border border-dashed border-secondary w-full" />

        {/* Social Media Links */}
        <nav className="text-center">
          <div className="flex justify-center gap-4 text-sm md:text-base">
            <Link>Facebook</Link>
            <Link>GitHub</Link>
            <Link>LinkedIn</Link>
            <Link>Twitter</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
