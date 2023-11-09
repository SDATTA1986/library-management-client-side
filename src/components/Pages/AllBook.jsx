
import { useLoaderData } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import DisplayBook from './DisplayBook';
import { useState } from 'react';

const AllBook = () => {
    const books = useLoaderData();
    console.log(books);
    const [selectedBooks,setSelectedBooks]=useState(books);
    const handleFilter=()=>{
        
            const filteredBooks = books.filter(book => book.Quantity > 0);
            console.log(filteredBooks);
            setSelectedBooks(filteredBooks);
         
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl'></div>

            <div className='flex flex-col justify-center items-center'>
            <button onClick={handleFilter} className="btn bg-green-600 hover:bg-green-700 btn-wide ">Filter Available Books</button>
            </div>

            <div className="mt-[70px] grid grid-cols-2 gap-20 mb-[20px]">
                {
                    selectedBooks.map(book => <DisplayBook key={book._id} user={book} ></DisplayBook>)
                }
            </div>
        </div>
    );
};

export default AllBook;