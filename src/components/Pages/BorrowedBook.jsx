import { useLoaderData } from "react-router-dom";


import { useState } from "react";
import { useContext} from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Navbar from './../Shared/Navbar';
import { AuthContext } from './../Providers/AuthProvider';


const BorrowedBook = () => {
    const { user } = useContext(AuthContext);
    const items = useLoaderData();
    // const [cartItem, setCartItem] = useState(items);
    // console.log(items);
    const filteredBooks = items.filter(item => item.email === user.email);
     const [cartItem, setCartItem] = useState(filteredBooks);

    console.log(filteredBooks);
    // setCartItem(filteredBooks);
    // const cartItem=filteredBooks;
    const handleReturn=(_id,Name)=>{
        console.log(_id,Name);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return This Book!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/BookCart/${_id}`,{
                    method:"DELETE",
                })
                .then(res=>res.json())
                .then(data=>{console.log(data);
                    const remaining=cartItem.filter(singleItem=>singleItem._id!==_id);
                    setCartItem(remaining);
                    if(data.deletedCount>0){
                        Swal.fire("Returned !", "You have successfully Returned This Book!", "success");
                    }
            })
          }})
        
        
    }
    
    return (
        <div>
            <Navbar></Navbar>
            {cartItem?.length > 0 ?
                <div className="mt-[70px] grid grid-cols-2 gap-20 mb-[20px]">
                   
                    {cartItem?.map(item => (
                        <div key={item._id}>
                            <div className="hero  bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={item.Image} className=" rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-2xl font-bold">Book Name: {item.Name}</h1>
                                        <h1 className="text-2xl font-bold">Book Category: {item.Category}</h1>
                                        <p className="py-2  text-green-700  font-bold">Borrowed Date: {item.borrowedDate}</p>
                                        <p className="py-2  text-green-700  font-bold">Return Date: {item.returnDate}</p>
                                        
                                        <button onClick={() => handleReturn(item._id,item.Name)} className="btn bg-green-600 hover:bg-green-700">Return</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                :
                <div className="mt-[70px] text-center text-5xl mb-[20px]">
                    No Books is Borrowed
                </div>
            }
        </div>
    );
};
export default BorrowedBook;