import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./Provider/AuthProvider.jsx";


AOS.init({
  duration: 1000,
  delay: 1000,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
