
import { FaSearch,FaShoppingCart,FaUser} from "react-icons/fa";
const Services = () => {
    return (
        <div className="grid grid-cols-3 gap-10 my-20" >

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <div className="">
                    <div className='flex justify-center'>
                    <FaSearch className="text-3xl mb-3 hover:text-green-700"></FaSearch>
                    </div>
                    <a href="#">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Catalog and Search Service</h5>
                    </a>
                </div>
                
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">This service allows users to search and browse the library's collection. Users can look for books, journals, and other resources by title, author, subject, or keywords. It provides quick access to the library's catalog and helps users find the resources they need</p>
                
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <div className="">
                    <div className='flex justify-center'>
                    <FaShoppingCart className="text-3xl mb-3 hover:text-green-700"></FaShoppingCart>
                    </div>
                    <a href="#">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Checkout and Borrowing Service</h5>
                    </a>
                </div>
                
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">This service enables library patrons to borrow physical and digital items. Users can check out books, e-books, and other materials, and the system keeps track of due dates. It may also provide notifications for upcoming returns and allow renewals</p>
                
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <div className="">
                    <div className='flex justify-center'>
                    <FaUser className="text-3xl mb-3 hover:text-green-700"></FaUser>
                    </div>
                    <a href="#">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">User Account and Profile Management</h5>
                    </a>
                </div>
                
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">This service allows library users to create and manage their accounts. Users can log in, view their borrowing history, and update their contact information. It may also provide features like placing holds, tracking reading lists, and managing fines</p>
                
            </div>
           

        </div>
    );
};

export default Services;