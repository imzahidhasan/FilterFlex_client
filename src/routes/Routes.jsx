import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <h1>this is home page</h1>,
        errorElement: <h1>this is error page</h1>
    }
])