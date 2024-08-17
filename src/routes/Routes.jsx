import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Template from "../pages/Template";
import PrivetRoute from "./PrivetRoute";





export const route = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        errorElement: <h1>this is error page</h1>
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/products',
        element: <Template />,
        children: [
            {
                index: true,
                element: <PrivetRoute>
                    <HomePage />
                </PrivetRoute>
            }
        ]
    },
])