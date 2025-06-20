import React from "react";

import { Outlet } from "react-router";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";

const MainLayout = () => {
  return (
    <>
      
        <div className="container mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    
    </>
  );
};

export default MainLayout;
