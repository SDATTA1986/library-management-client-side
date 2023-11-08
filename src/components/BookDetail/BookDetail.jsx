import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';


        
   
const BookDetail = () => {
    const { _id } = useParams();
    console.log(_id);
    const books = useLoaderData();
    console.log(books);
    const singleBook = books.find(book => book._id === (_id));
    console.log(singleBook);
    const { user } = useContext(AuthContext);
    const { Image, Name, Category, authorName, Rating, Quantity } = singleBook || {};
    const Rating2 = parseFloat(Rating);
    // Get the current date in the format "YYYY-MM-DD"
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // January is 0
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
console.log(getCurrentDate());
   
    
    const handleCart=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const borrowedDate = e.target.borrowedDate.value;
        const returnDate = e.target.returnDate.value;
        
        const myData={
            Image,Name,Category,email,borrowedDate,returnDate
        };
        console.log(myData);
        
        fetch("http://localhost:5000/BookCart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                swal("Congratulations!", "You have successfully Borrowed Book!", "success");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{Name}</h1>
                        <p className="py-2  text-green-700 text-5xl font-bold">{Category}</p>
                        <p className="py-2">Author Name: {authorName}</p>
                        <p className="py-2">Quantity:  <span className="text-2xl font-bold">{Quantity}</span></p>

                        <p className="py-2">Rating: <span className="text-2xl font-bold">{Rating2}</span>/10</p>
                        <div className="flex gap-2">
                            <button className="btn bg-green-600 hover:bg-green-700" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p> */}
                                    <div className="px-6 py-6 lg:px-8">
                                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                        <form onSubmit={handleCart} className="space-y-6" action="#">
                                            <div className="form-control">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" defaultValue={user?.displayName}  />


                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" defaultValue={user.email}  />

                                                <label htmlFor="dateInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Borrowed Date</label>
                                                <input type="text" name="borrowedDate" id="dateInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" defaultValue={getCurrentDate()} />

                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Return Date</label>
                                                <input type="date" name="returnDate" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
                                            </div>
                                            <div className="modal-action"> 
                                            
                                            <button  type="submit" className="btn" >Submit</button>
                                            
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="modal-action"> 
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button  type="submit" className="btn" >Close</button>
                                        </form>
                                     </div>
                                </div>
                            </dialog>
                            <Link to={`/updateProduct/${_id}`}><button className="btn  bg-green-600 hover:bg-green-700">Read</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;