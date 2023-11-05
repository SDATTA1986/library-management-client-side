


import { NavLink } from "react-router-dom";


import logo from '../../assets/logo.jpg'



const Navbar = () => {

    const navLinks = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/addProduct">Add Book</NavLink></li>
        <li ><NavLink to="/myCart">All Books</NavLink></li>
        <li ><NavLink to="/myCart">Borrowed Books</NavLink></li>


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
                   <NavLink className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white" to='/login'>LOGIN </NavLink>
                   </div>
                    <div>
                    <input type="checkbox" className="toggle" />
                   
               
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;