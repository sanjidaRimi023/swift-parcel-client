import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";

AOS.init({
  duration: 1000,
  delay: 1000,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="bg-base-200">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
    </AuthProvider>
  </StrictMode>
);
