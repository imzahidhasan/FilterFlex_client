import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage"
export const route = createBrowserRouter([
    {
        path: '/',
        element:<HomePage/>,
        errorElement: <h1>this is error page</h1>
    }
])