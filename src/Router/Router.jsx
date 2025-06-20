import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                index: true,
                Component: Home
            }
        ]
    }
])