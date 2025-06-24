import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home"
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Coverage from "../Pages/Coverage";
import SendParcel from "../Pages/sendParcel";
import PrivateRoute from "./PrivateRoute";
import Pricing from "../Pages/Pricing";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                index: true,
                Component: Home
            },
            {
                path: "/coverage",
                Component: Coverage,
                loader: ()=> fetch("./districtData.json")

            },
            {
                path: "/send-parcel",
                element: <PrivateRoute>
                    <SendParcel/>
                </PrivateRoute>,
                loader: () => fetch("./districtData.json")

            },
            {
                path: "/pricing",
                element: <PrivateRoute>
                    <Pricing/>
                </PrivateRoute>
            },
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])