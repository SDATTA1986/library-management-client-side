import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const  location=useLocation()
    if(loading)
    {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    else if(user){
        return children;
    }
    else{
    return <Navigate state={location.pathname} to='/login'></Navigate>;
    }
};

export default PrivateRoute;