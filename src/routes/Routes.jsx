import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage";
export const route = createBrowserRouter([
    {
        path: '/products',
        element:<HomePage/>,
        errorElement: <h1>this is error page</h1>
    },
    {
        path: '/',
        element:<LoginPage/>
    }
])