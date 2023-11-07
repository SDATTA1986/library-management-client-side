import Navbar from "../Shared/Navbar";


import { useLoaderData, useParams } from "react-router-dom";
import DisplayProduct from './../DisplayProduct/DisplayProduct';

const CategoryDetails = () => {
    const { name } = useParams();
    console.log(name);
    const users=useLoaderData();
    console.log(users);
     const singleCategory = users.filter(user1 => user1.Category === (name));
     console.log(singleCategory.length);
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl'>

           
                {singleCategory.length>0? <div className="mt-[70px] grid grid-cols-2 gap-20 mb-[20px]">
                {
                    singleCategory.map(user => <DisplayProduct key={user._id} user={user} ></DisplayProduct>)
                }
                </div>: 
                <div className="mt-[70px] text-center text-5xl mb-[20px]">
                    No Product Available
                </div>
                }
                
            
        </div>
        </div>
    );
};

export default CategoryDetails;