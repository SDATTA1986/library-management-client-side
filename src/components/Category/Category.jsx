import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Category = ({ category }) => {
    const { image, name } = category || {};
    return (
       
            <div>
                <div className="card w-96 bg-base-100 shadow-xl mb-5">
                    <figure><img src={image} alt="Shoes" /></figure>
                    {/* <h2 className="text-5xl text-center bg-green-600  hover:bg-green-700 text-white mt-4 rounded-lg">{name}</h2> */}
                    <h2 className="card-title mx-auto text-5xl text-center ">{name}</h2>
                    <div className="card-actions justify-end">
                    <Link to={`/category/${name}`}><button className="btn bg-green-500">View Details <AiOutlineArrowRight></AiOutlineArrowRight></button></Link>
                    </div>
                    
                </div>
            </div>
        
    );
};

export default Category;