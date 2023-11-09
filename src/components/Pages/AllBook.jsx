
import { useLoaderData } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import DisplayBook from './DisplayBook';

const AllBook = () => {
    const books=useLoaderData();
    console.log(books);
    return (
        <div>
             <Navbar></Navbar>
            <div className='max-w-6xl'></div>
            <div className="mt-[70px] grid grid-cols-2 gap-20 mb-[20px]">
                {
                    books.map(book => <DisplayBook key={book._id} user={book} ></DisplayBook>)
                }
                </div>
        </div>
    );
};

export default AllBook;