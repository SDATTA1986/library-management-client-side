import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

const DisplayProduct = ({ user }) => {
    const { Image, Name, authorName, Category,Rating,_id } = user || {};
    const Rating2=parseFloat(Rating);
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{Name}</h1>
                        <p className="py-2  text-green-700 text-5xl font-bold">{authorName}</p>
                        <p className="py-2">Category: {Category}</p>
                        
                        <p className="py-2">Rating: <span className="text-2xl font-bold">{Rating2}</span>/10</p>
                        <StarRatings
                            rating={Rating2}
                            starDimension="20px"
                            starSpacing="2px"
                            numberOfStars={10}
                            starRatedColor="orange"
                        />
                        <div className="flex gap-2">
                        <Link to={`/Books/${_id}`}><button className="btn bg-green-600 hover:bg-green-700">View Details</button></Link>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;