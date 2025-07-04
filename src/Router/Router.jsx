
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Coverage from "../Pages/Coverage";
import SendParcel from "../Pages/sendParcel";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About";
import Payment from "../Pages/DashboardPage/Payment/Payment";
import DashBoard from "../Components/DashBoard";
import MyParcels from "../Pages/DashboardPage/MyParcels"
import PaymentHistory from "../Pages/DashboardPage/PaymentHistory";
import TrackingParcel from "../Pages/DashboardPage/TrackingParcel";
import Profile from "../Pages/DashboardPage/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "coverage",  
        Component: Coverage,
        loader: () => fetch("/districtData.json"),
      },
      {
        path: "send-parcel",  
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/districtData.json"),
      },
      {
        path: "about",  
        Component: About,
      },
      
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
   
  {
    path: "dashboard",   
    element: (
      <PrivateRoute>
        <DashBoard/> 
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <div>Welcome to your dashboard!</div>,
      },
      {
        path: "my-parcels",  
        element: <MyParcels/>
      },
      {
        path: "payment-history",  
        element: <PaymentHistory/>
      },
      {
        path: "track",  
        element: <TrackingParcel/>
      },
      {
        path: "profile",  
        element: <Profile/>
      },
      {
        path: "payment/:parcelId", 
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        
      },
      
    ],
  },
]);
