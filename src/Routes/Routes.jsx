import { createBrowserRouter } from "react-router-dom";



import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import Root from "../components/Layouts/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/brands.json'),

            },
            
            
        ]
    }
]);
export default router;