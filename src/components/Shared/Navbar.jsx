

import userDefaultPic from '../../assets/user.png'
import { NavLink } from "react-router-dom";


import logo from '../../assets/logo.jpg'
import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';



const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {

                swal("Good Bye!", "You have successfully Logged Out!", "success");
            })
            .catch()
    }

    const navLinks = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/addBook">Add Book</NavLink></li>
        <li ><NavLink to="/allBook">All Books</NavLink></li>
        <li ><NavLink to="/borrowedBook">Borrowed Books</NavLink></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='max-w-[150px] max-h-[150px]' src={logo} alt="" />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex  items-center gap-2 ">

                    <div>
                        {

                            user ?
                                <div className='flex justify-center items-center'>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">

                                            {user.photoURL ? <img src={user.photoURL} />
                                                : <img src={userDefaultPic} />
                                            }
                                        </div>
                                    </label>
                                    <div className='flex justify-center items-center'>
                                        <h3 className='text-xl '>{user?.displayName}</h3>
                                        <button onClick={handleLogOut} className="btn bg-green-600 hover:bg-green-700 text-xl">Log Out</button>
                                    </div>
                                </div>

                                :
                                <NavLink className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white" to='/login'>LOGIN </NavLink>
                        }
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Navbar;