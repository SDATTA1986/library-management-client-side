import { createBrowserRouter } from "react-router-dom";



import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import Root from "../components/Layouts/Root";
import CategoryDetails from './../components/Category/CategoryDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            
            },
            {
                path:'/category/:name',
                element:<CategoryDetails></CategoryDetails>,
                loader: ()=>fetch('http://localhost:5000/Book')
                }
            
        ]
    }
]);
export default router;