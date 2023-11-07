

import swal from "sweetalert";
import Navbar from "../Shared/Navbar";
import { useForm } from "react-hook-form"

const AddBook = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    
        fetch("http://localhost:5000/Book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                swal("Congratulations!", "You have successfully Added This Book to Library!", "success");
            }
        })
    }

    

    
    
    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="url" name="image" id="Image URL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  {...register("Image")} placeholder="Image URL" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  {...register("Name")} placeholder="Book Name" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  {...register("Quantity")} placeholder="Book Quantity" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  {...register("authorName")} placeholder="Author Name" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("Category")}>
                        <option value="Science-Fiction">Science-Fiction</option>
                        <option value="History">History</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>


                    </select>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  {...register("Description")} placeholder="Short Description" required />

                </div>





                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="rating" id="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  {...register("Rating")} placeholder="Rating(out of 10)" required />

                </div>



                <input type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value="Add" />
            </form>

        </div>
    );
};

export default AddBook;