

// import { useLoaderData } from "react-router-dom";
import Navbar from './../Shared/Navbar';

import Slider from './../Slider/Slider';
import Footer from './../Footer/Footer';
import { useEffect, useState } from 'react';
import Category from '../Category/Category';




const Home = () => {
    // const categories = useLoaderData();
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/Category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[]);
    

    return (
        
            <div>
                <Navbar></Navbar>
                
                 <Slider></Slider>
                <div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px]" >OUR CATEGORIES</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <div className="mt-[70px] grid grid-cols-2 mx-auto ">
                    {
                        categories && categories?.map(category => <Category key={category.id} category={category} ></Category>)
                    }
                </div>
               
                <Footer></Footer> 

            </div>
       
    );
};

export default Home;