import { createBrowserRouter } from "react-router-dom";



import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import Root from "../components/Layouts/Root";
import CategoryDetails from './../components/Category/CategoryDetails';
import PrivateRoute from './PrivateRoute';
import AddBook from './../components/Pages/AddBook';
import AllBook from './../components/Pages/AllBook';
import BorrowedBook from './../components/Pages/BorrowedBook';
import Login from './../components/Shared/Login';

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
                path: '/category/:name',
                element: <CategoryDetails></CategoryDetails>,
                loader: () => fetch('http://localhost:5000/Book')
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
                
            },
            {
                path: '/allBook',
                element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
                
            },
            {
                path: '/borrowedBook',
                element: <PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>,
                
            },
            {
                path: '/login',
                element: <Login></Login>

            },

        ]
    }
]);
export default router;