

// import { useLoaderData } from "react-router-dom";
import Navbar from './../Shared/Navbar';

import Slider from './../Slider/Slider';
import Footer from './../Footer/Footer';




const Home = () => {
    // const categories = useLoaderData();
    
    

    return (
        
            <div>
                <Navbar></Navbar>
                
                 <Slider></Slider>
                {/*<div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px]" >OUR CATEGORIES</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <div className="mt-[70px] grid grid-cols-3 ">
                    {
                        categories && categories?.map(brand => <Category key={brand.id} brand={brand} ></Category>)
                    }
                </div>
                */}
                <Footer></Footer> 

            </div>
       
    );
};

export default Home;