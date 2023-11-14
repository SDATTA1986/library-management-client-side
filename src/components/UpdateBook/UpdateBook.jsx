import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Navbar from './../Shared/Navbar';




const UpdateBook = () => {
    const product=useLoaderData();
    const { _id,Image, Name,  authorName, Quantity, Rating, Description } = product || {};
    let {Category}= product ||{};
    const [Category1,setState]=useState(Category);
    const handleChange = event=>{
        const categoryType=event.target.value;
        setState(categoryType);
        console.log(categoryType);
    }
    const handleUpdateProduct=e=>{
        e.preventDefault();
        const form=e.target;
        const Image=form.image.value;
        const Name=form.name.value;
        const authorName=form.authorName.value;
        const Quantity=form.quantity.value;
        const Description=form.description.value;
        const Rating=form.rating.value;
        Category=Category1;
        console.log(Image,Name,authorName,Quantity,Description,Rating,Category);
        const myData={
            Image,Name,authorName,Quantity,Description,Rating,Category
        };
        form.reset();
        fetch(`http://localhost:5000/Book/${_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                swal("Congratulations!", "You have successfully Updated This Product!", "success");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-extrabold text-center">Update Book: {Name}</h1>
            <form onSubmit={handleUpdateProduct}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="url" name="image" id="Image URL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={Image} placeholder="Image URL" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={Name} placeholder="Book Name" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select onChange={handleChange} value={Category} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Science-Fiction">Science-Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Novel">Novel</option>
                        <option value="History">History</option>
                        
                        
                    </select>


                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="authorName" id="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={authorName} placeholder="Author Name" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="quantity" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={Quantity} placeholder="Quantity" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={Description} placeholder="Short Description" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" id="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={Rating} placeholder="Rating(out of 10)" required />

                    </div>
                    
                </div>

                <input type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value="Update"/>
            </form>

        </div>
    );
};

export default UpdateBook;