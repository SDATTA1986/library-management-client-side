

// import { useLoaderData } from "react-router-dom";
import Navbar from './../Shared/Navbar';

import Slider from './../Slider/Slider';
import Footer from './../Footer/Footer';
import { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Services from './../Services/Services';
import ContactUs from './../Contact/ContactUs';




const Home = () => {
    // const categories = useLoaderData();
    const [theme, setTheme] = useState(true);
    const [categories,setCategories]=useState([]);
    const [text,setText]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/Category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[]);
    

    return (
        <html data-theme={theme ? "light" : "dark"}>
            <div>
                <Navbar className={text?"text-black":"text-white"}></Navbar>
                <div className="flex justify-center ">
                    <button onClick={() => setTheme(!theme)} className="btn bg-green-600 hover:bg-green-700">Change Theme</button>
                </div>
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
                <div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px]">OUR SERVICES</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <Services></Services>
                <div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">CONTACT US</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <ContactUs className={text?"text-black":"text-white"}></ContactUs>
                <Footer></Footer> 

            </div>
            </html>
    );
};

export default Home;